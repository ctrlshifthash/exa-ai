type Row = {
  label: string;
  exa: number;
  perplexity: number;
  brave: number;
};

const rows: Row[] = [
  { label: "FRAMES", exa: 54.4, perplexity: 44.5, brave: 36.0 },
  { label: "Tip-of-Tongue", exa: 54.2, perplexity: 36.7, brave: 34.5 },
  { label: "Seal0", exa: 48.1, perplexity: 39.2, brave: 28.4 },
];

const Bar = ({
  value,
  color,
  label,
  highlight,
}: {
  value: number;
  color: string;
  label: string;
  highlight?: boolean;
}) => (
  <div className="flex flex-col items-center gap-2 flex-1">
    <div className="relative w-full h-[160px] flex items-end">
      <div
        className="w-full rounded-t-sm transition-all"
        style={{ height: `${value}%`, background: color }}
      />
      <div
        className={`absolute -top-6 left-1/2 -translate-x-1/2 text-[12px] font-semibold ${
          highlight ? "text-[#1652f0]" : "text-[#6b6b6b]"
        }`}
      >
        {value.toFixed(1)}%
      </div>
    </div>
    <div className="text-[11px] text-[#6b6b6b]">{label}</div>
  </div>
);

export default function Benchmarks() {
  return (
    <section
      id="benchmarks"
      className="py-24 md:py-32 border-t border-[#ececec]"
    >
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div className="text-[12px] uppercase tracking-wider text-[#6b6b6b] mb-4">
            Benchmarks
          </div>
          <h2 className="font-[family-name:var(--font-serif)] text-[36px] md:text-[52px] leading-[1.05] tracking-tight mb-6">
            Highest quality search at every latency.
          </h2>
          <p className="text-[16px] leading-relaxed text-[#5a5a5a] max-w-[460px]">
            Best-in-class accuracy on the search benchmarks that actually
            matter for agents — FRAMES, Tip-of-Tongue, Seal0 — across every
            latency tier from 450ms to 10s.
          </p>
          <div className="mt-8 flex items-center gap-6">
            <Legend color="#1652f0" label="Exa MCP" />
            <Legend color="#a1a1a1" label="Perplexity" />
            <Legend color="#cfcfcf" label="Brave" />
          </div>
        </div>

        <div className="bg-[#fafafa] border border-[#ececec] rounded-2xl p-8">
          <div className="space-y-10">
            {rows.map((row) => (
              <div key={row.label}>
                <div className="text-[13px] font-medium mb-8">{row.label}</div>
                <div className="flex items-end gap-6">
                  <Bar
                    value={row.exa}
                    color="#1652f0"
                    label="Exa"
                    highlight
                  />
                  <Bar value={row.perplexity} color="#a1a1a1" label="Perplexity" />
                  <Bar value={row.brave} color="#cfcfcf" label="Brave" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2 text-[13px] text-[#1a1a1a]">
      <span
        className="inline-block h-2.5 w-2.5 rounded-sm"
        style={{ background: color }}
      />
      {label}
    </div>
  );
}
