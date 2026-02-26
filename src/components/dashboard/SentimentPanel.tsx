const wardData = [
  { ward: "W1", positive: 72, negative: 28 },
  { ward: "W2", positive: 65, negative: 35 },
  { ward: "W3", positive: 45, negative: 55 },
];

const SentimentPanel = () => (
  <div className="rounded-lg border border-border bg-card p-4">
    <h3 className="text-sm font-semibold text-foreground">Sentiment & Trends</h3>

    {/* Donut-style summary */}
    <div className="mt-4 flex items-center gap-4">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <svg viewBox="0 0 36 36" className="h-20 w-20 -rotate-90">
          <circle cx="18" cy="18" r="15.9" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
          <circle
            cx="18" cy="18" r="15.9" fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeDasharray="60 40"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute text-lg font-bold text-foreground font-mono">60%</span>
      </div>
      <div className="text-xs text-muted-foreground">
        <p className="font-medium text-foreground">Satisfied</p>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-primary" />
          Positive
        </div>
        <div className="mt-1 flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-destructive" />
          Negative
        </div>
      </div>
    </div>

    {/* Ward bars */}
    <div className="mt-5">
      <p className="mb-2 text-[11px] font-medium text-muted-foreground">Ward Sentiment Ratios</p>
      <div className="space-y-2">
        {wardData.map(({ ward, positive }) => (
          <div key={ward} className="flex items-center gap-2">
            <span className="w-6 text-[11px] font-mono text-muted-foreground">{ward}</span>
            <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-muted">
              <div
                className="rounded-full bg-primary transition-all"
                style={{ width: `${positive}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Call volume */}
    <div className="mt-5 rounded-md bg-muted p-3">
      <p className="text-[11px] text-muted-foreground">Call Volume</p>
      <p className="mt-1 text-lg font-bold text-primary font-mono">+12%</p>
    </div>
  </div>
);

export default SentimentPanel;
