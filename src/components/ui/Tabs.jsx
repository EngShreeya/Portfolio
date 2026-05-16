import { cn } from '../../lib/cn'

export function Tabs({ value, onChange, items, className }) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur',
        className,
      )}
      role="tablist"
      aria-label="Skill categories"
    >
      {items.map((t) => {
        const active = t.key === value
        return (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(t.key)}
            className={cn(
              'rounded-full px-3 py-2 text-xs font-medium transition',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60',
              active
                ? 'bg-white/10 text-white shadow-[0_0_0_1px_rgba(255,255,255,0.10)]'
                : 'text-white/60 hover:text-white/85 hover:bg-white/6',
            )}
          >
            {t.label}
          </button>
        )
      })}
    </div>
  )
}

