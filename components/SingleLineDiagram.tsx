// Decorative single-line diagram: incomer, main bus, feeders and distribution boards.
// Draws itself once on page load.
export default function SingleLineDiagram() {
  const drops = [40, 110, 180, 250, 320];
  return (
    <svg
      viewBox="0 0 360 290"
      role="img"
      aria-label="Single-line diagram of an electrical distribution: incomer, main bus and distribution boards"
      className="h-auto w-full text-line"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="square"
    >
      <path className="draw" pathLength={1} d="M180 8 V46" />
      <rect className="draw" pathLength={1} x="172" y="46" width="16" height="16" style={{ animationDelay: "0.2s" }} />
      <path className="draw" pathLength={1} d="M180 62 V100" style={{ animationDelay: "0.3s" }} />
      <path className="draw" pathLength={1} d="M30 100 H330" strokeWidth="3" style={{ animationDelay: "0.5s" }} />
      {drops.map((x, i) => (
        <g key={x}>
          <path className="draw" pathLength={1} d={`M${x} 100 V148`} style={{ animationDelay: `${0.8 + i * 0.15}s` }} />
          <rect className="draw" pathLength={1} x={x - 7} y="148" width="14" height="14" style={{ animationDelay: `${0.9 + i * 0.15}s` }} />
          <path className="draw" pathLength={1} d={`M${x} 162 V196`} style={{ animationDelay: `${1.0 + i * 0.15}s` }} />
          <rect
            className="draw"
            pathLength={1}
            x={x - 24}
            y="196"
            width="48"
            height="38"
            stroke={i === 2 ? "rgb(var(--accent))" : "currentColor"}
            style={{ animationDelay: `${1.1 + i * 0.15}s` }}
          />
          <text x={x} y="220" textAnchor="middle" className="draw-label" fill="currentColor" stroke="none" fontSize="11">
            DB
          </text>
        </g>
      ))}
      <text x="192" y="90" className="draw-label" fill="currentColor" stroke="none" fontSize="11">
        MDB
      </text>
      <text x="192" y="30" className="draw-label" fill="currentColor" stroke="none" fontSize="11">
        Incomer
      </text>
    </svg>
  );
}
