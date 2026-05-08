"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const DAY_LABELS = ["","Mon","","Wed","","Fri",""];

// Seeded fallback — shown while real data loads
function buildFallbackData(): number[] {
  let seed = 31415;
  function rnd() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  }
  const data: number[] = [];
  for (let w = 0; w < 53; w++) {
    for (let d = 0; d < 7; d++) {
      const burst = (w % 8 === 0 && rnd() > 0.45) || rnd() > 0.92;
      const weekend = d === 5 || d === 6;
      const base = rnd();
      let v = 0;
      if (burst) v = 3 + Math.floor(rnd() * 2);
      else if (weekend && base > 0.5) v = 1 + Math.floor(rnd() * 3);
      else if (base > 0.72) v = 1 + Math.floor(rnd() * 2);
      else if (base > 0.55) v = 1;
      data.push(Math.min(v, 4));
    }
  }
  return data;
}

interface ContribDay { date: string; count: number; }

function toLevel(count: number): number {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

function computeStreaks(days: ContribDay[]): { longest: number; current: number } {
  let longest = 0, run = 0;
  for (const d of days) {
    if (d.count > 0) { run++; longest = Math.max(longest, run); }
    else run = 0;
  }
  // current: walk backwards from today
  let current = 0;
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].count > 0) current++;
    else break;
  }
  return { longest, current };
}

// Build the 53-week grid columns from flat day array
function buildWeeks(days: ContribDay[]): ContribDay[][] {
  // Pad so first day is Sunday (col 0)
  const firstDate = new Date(days[0].date);
  const startDow = firstDate.getDay(); // 0=Sun
  const padded: (ContribDay | null)[] = [
    ...Array(startDow).fill(null),
    ...days,
  ];
  const weeks: ContribDay[][] = [];
  for (let i = 0; i < padded.length; i += 7) {
    const week = padded.slice(i, i + 7);
    while (week.length < 7) week.push(null);
    weeks.push(week as ContribDay[]);
  }
  return weeks.slice(0, 53);
}

const FALLBACK = buildFallbackData();

export default function Lately() {
  const [days, setDays] = useState<ContribDay[] | null>(null);
  const [total, setTotal] = useState<number>(267);
  const [streaks, setStreaks] = useState({ longest: 14, current: 5 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/github-contributions")
      .then((r) => r.json())
      .then((data) => {
        if (data.days) {
          setDays(data.days);
          setTotal(data.total);
          setStreaks(computeStreaks(data.days));
        }
      })
      .catch(() => {/* silently use fallback */})
      .finally(() => setLoading(false));
  }, []);

  // Build month labels + cell grid from real data
  const renderRealGrid = (days: ContribDay[]) => {
    const weeks = buildWeeks(days);
    const monthLabels: { label: string; span: number }[] = [];
    let lastMonth = -1;
    for (const week of weeks) {
      const firstReal = week.find((d) => d !== null);
      if (firstReal) {
        const m = new Date(firstReal.date).getMonth();
        if (m !== lastMonth) { monthLabels.push({ label: MONTHS[m], span: 1 }); lastMonth = m; }
        else { monthLabels[monthLabels.length - 1].span++; }
      } else {
        if (monthLabels.length > 0) monthLabels[monthLabels.length - 1].span++;
      }
    }

    return (
      <>
        <div className="month-row">
          <span />
          {monthLabels.map((m, i) => (
            <span key={i} style={{ gridColumn: `span ${m.span}` }}>{m.label}</span>
          ))}
        </div>
        <div className="activity-grid" style={{ gridTemplateRows: "repeat(7, 14px)" }}>
          {DAY_LABELS.map((label, d) => (
            <span key={`lbl-${d}`} className="day-label" style={{ gridRow: d + 1, gridColumn: 1 }}>
              {label}
            </span>
          ))}
          {weeks.map((week, w) =>
            week.map((day, d) => {
              if (!day) return <div key={`${w}-${d}`} style={{ gridRow: d + 1, gridColumn: w + 2 }} />;
              const level = toLevel(day.count);
              const tip = day.count === 0 ? "no contributions" : `${day.count} contribution${day.count === 1 ? "" : "s"} · ${day.date}`;
              return (
                <div
                  key={`${w}-${d}`}
                  className={level === 0 ? "cell" : `cell l${level}`}
                  data-tip={tip}
                  style={{ gridRow: d + 1, gridColumn: w + 2 }}
                />
              );
            })
          )}
        </div>
      </>
    );
  };

  const renderFallbackGrid = () => (
    <>
      <div className="month-row">
        <span />
        {Array.from({ length: 53 }, (_, w) => {
          const monthIdx = Math.floor(w / 4);
          if (w % 4 === 0 && monthIdx < 13) {
            const labels = ["May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May"];
            return <span key={w} style={{ gridColumn: "span 4" }}>{labels[monthIdx]}</span>;
          }
          return null;
        })}
      </div>
      <div className="activity-grid" style={{ gridTemplateRows: "repeat(7, 14px)" }}>
        {DAY_LABELS.map((label, d) => (
          <span key={`lbl-${d}`} className="day-label" style={{ gridRow: d + 1, gridColumn: 1 }}>
            {label}
          </span>
        ))}
        {Array.from({ length: 53 }, (_, w) =>
          Array.from({ length: 7 }, (_, d) => {
            const v = FALLBACK[w * 7 + d];
            const tip = v === 0 ? "no contributions" : `${v} contribution${v === 1 ? "" : "s"}`;
            return (
              <div
                key={`${w}-${d}`}
                className={v === 0 ? "cell" : `cell l${v}`}
                data-tip={tip}
                style={{ gridRow: d + 1, gridColumn: w + 2 }}
              />
            );
          })
        )}
      </div>
    </>
  );

  return (
    <section id="lately" style={{ paddingTop: "80px", paddingBottom: "60px" }}>
      <div className="chapter">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="chapter-tag">
            <span className="line" />
            <span><span className="num">06</span>&nbsp; lately</span>
          </div>

          <h2 className="display" style={{ fontSize: "clamp(34px, 4.5vw, 56px)" }}>
            A year of <em>shipping,</em><br />
            one square at a time.
          </h2>

          <p className="lately-sub">
            Pulled from GitHub. Quiet weeks, loud weekends, the occasional 2 AM —
            every square is a day I touched the codebase.
          </p>
        </motion.div>

        <motion.div
          className="activity-card"
          initial={{ y: 24, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="activity-head">
            <h3>
              <em>{total.toLocaleString()}</em> contributions in the last year
            </h3>
            <div className="activity-meta">
              <b>@TonyStark0801</b>&nbsp;·&nbsp;
              <a
                href="https://github.com/TonyStark0801"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--warm)" }}
              >
                github.com/TonyStark0801
              </a>
            </div>
          </div>

          <div className="grid-wrap" style={{ opacity: loading ? 0.4 : 1, transition: "opacity 0.3s" }}>
            {days ? renderRealGrid(days) : renderFallbackGrid()}
          </div>

          <div className="activity-foot">
            <div>
              quiet days&nbsp;
              <span className="legend">
                <span className="lc" style={{ background: "var(--bg-2)" }} />
                <span className="lc" style={{ background: "rgba(232,180,104,0.18)" }} />
                <span className="lc" style={{ background: "rgba(232,180,104,0.38)" }} />
                <span className="lc" style={{ background: "rgba(232,180,104,0.65)" }} />
                <span className="lc" style={{ background: "rgba(232,180,104,0.95)", boxShadow: "0 0 6px rgba(232,180,104,0.4)" }} />
              </span>
              &nbsp;loud days
            </div>
            <div>
              longest streak{" "}
              <b style={{ color: "var(--ink-2)", fontWeight: 500 }}>{streaks.longest} days</b>
              &nbsp;·&nbsp;current streak{" "}
              <b style={{ color: "var(--ink-2)", fontWeight: 500 }}>{streaks.current} days</b>
            </div>
          </div>

          <div className="activity-tags">
            <div className="at-row">
              <div className="at-lbl">// most-touched repo</div>
              <div className="at-val"><em>codejam-dev</em> / backend</div>
            </div>
            <div className="at-row">
              <div className="at-lbl">// language of the year</div>
              <div className="at-val"><em>Java</em> &amp; TypeScript</div>
            </div>
            <div className="at-row">
              <div className="at-lbl">// activity mix</div>
              <div className="at-val"><em>93%</em> commits &nbsp;·&nbsp; 7% PRs</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
