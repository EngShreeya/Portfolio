import { cn } from '../../lib/cn'

// Tiny SVG noise as a data-URI so we can do “grain” without CSS files.
const noiseSvg = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240">
    <filter id="n">
      <feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
    <rect width="240" height="240" filter="url(#n)" opacity=".55"/>
  </svg>`,
)

export function Grain({ className }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none fixed inset-0 -z-10 opacity-[0.10] mix-blend-overlay',
        'animate-grain',
        className,
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,${noiseSvg}")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '240px 240px',
      }}
    />
  )
}

