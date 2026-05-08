"use client";

import { motion } from "framer-motion";

const WEEKS = 53;
const DAYS = 7;
const MONTHS = ["May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May"];
const DAY_LABELS = ["","Mon","","Wed","","Fri",""];

function buildGridData(): number[] {
  let seed = 31415;
  function rnd() {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  }
  const data: number[] = [];
  for (let w = 0; w < WEEKS; w++) {
    for (let d = 0; d < DAYS; d++) {
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

const DATA = buildGridData();

export default function Lately() {
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
            <h3><em>267</em> contributions in the last year</h3>
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

          <div className="grid-wrap">
            <div className="month-row">
              <span />
              {Array.from({ length: WEEKS }, (_, w) => {
                const monthIdx = Math.floor(w / 4);
                if (w % 4 === 0 && monthIdx < MONTHS.length) {
                  return (
                    <span key={w} style={{ gridColumn: "span 4" }}>
                      {MONTHS[monthIdx]}
                    </span>
                  );
                }
                return null;
              })}
            </div>

            <div
              className="activity-grid"
              style={{ gridTemplateRows: `repeat(${DAYS}, 14px)` }}
            >
              {DAY_LABELS.map((label, d) => (
                <span
                  key={`lbl-${d}`}
                  className="day-label"
                  style={{ gridRow: d + 1, gridColumn: 1 }}
                >
                  {label}
                </span>
              ))}

              {Array.from({ length: WEEKS }, (_, w) =>
                Array.from({ length: DAYS }, (_, d) => {
                  const v = DATA[w * DAYS + d];
                  const tip =
                    v === 0
                      ? "no contributions"
                      : `${v} contribution${v === 1 ? "" : "s"}`;
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
              <b style={{ color: "var(--ink-2)", fontWeight: 500 }}>14 days</b>
              &nbsp;·&nbsp;current streak{" "}
              <b style={{ color: "var(--ink-2)", fontWeight: 500 }}>5 days</b>
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
