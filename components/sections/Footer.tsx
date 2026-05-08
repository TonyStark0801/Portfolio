export default function Footer() {
  return (
    <>
      <div className="signature">
        <div className="sig-mark">Shubham</div>
        <div className="sig-meta">
          written, designed &amp; deployed by hand &nbsp;·&nbsp;{" "}
          <b>mumbai</b>, may 2026
        </div>
      </div>

      <footer style={{ borderTop: "1px solid var(--line)", padding: "36px 28px" }}>
        <div className="foot-inner">
          <div>
            <b>shubham mishra</b> · sde-i · jio platforms · mumbai
          </div>
          <div>built quietly · 2026 · v2</div>
        </div>
      </footer>
    </>
  );
}
