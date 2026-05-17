import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { cn } from '../../lib/cn'

const hoverEase = [0.16, 1, 0.3, 1]
const linkTransition =
  'transition-[border-color,background-color,color,box-shadow,transform] duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]'

function projectLinkClass({ variant, disabled, isFeatured, isPremium }) {
  return cn(
    'group/btn inline-flex min-h-10 items-center justify-center gap-2.5 rounded-2xl border bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 backdrop-blur-sm',
    linkTransition,
    'shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]',
    !disabled && 'hover:-translate-y-0.5 hover:text-white/95 active:translate-y-0',
    variant === 'live' && 'focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60',
    variant === 'github' &&
      'focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60',
    disabled && 'pointer-events-none opacity-40',
    !disabled &&
      isPremium &&
      variant === 'live' &&
      'border-white/15 hover:border-cyan-300/30 hover:bg-cyan-400/10 hover:shadow-[0_6px_24px_rgba(34,211,238,0.12)]',
    !disabled &&
      isPremium &&
      variant === 'github' &&
      'border-white/15 hover:border-fuchsia-300/35 hover:bg-fuchsia-500/10 hover:shadow-[0_6px_24px_rgba(168,85,247,0.12)]',
    !disabled &&
      !isPremium &&
      isFeatured &&
      'border-white/12 hover:border-white/20 hover:bg-white/9 hover:shadow-[0_6px_20px_rgba(168,85,247,0.10)]',
    !disabled && !isFeatured && 'border-white/10 hover:border-white/15 hover:bg-white/8',
  )
}

export function ProjectCard({ project, featured = false, githubFallback }) {
  const isPremium = Boolean(project.premium)
  const isFeatured = featured || isPremium

  return (
    <motion.article
      whileHover={{ y: isPremium ? -5 : isFeatured ? -4 : -3 }}
      transition={{ duration: 0.45, ease: hoverEase }}
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-3xl border backdrop-blur',
        'transition-[border-color,box-shadow,background-color] duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
        isPremium &&
          'min-h-[248px] border-white/15 bg-white/[0.07] p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_12px_48px_rgba(168,85,247,0.12),0_0_64px_rgba(34,211,238,0.08)] hover:border-white/25 hover:bg-white/[0.09] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_28px_72px_rgba(168,85,247,0.18),0_0_88px_rgba(34,211,238,0.12)] md:min-h-[288px] md:p-9',
        !isPremium &&
          isFeatured &&
          'min-h-[232px] border-white/12 bg-white/[0.06] p-7 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_8px_40px_rgba(168,85,247,0.08)] hover:border-white/22 hover:bg-white/[0.08] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_24px_64px_rgba(168,85,247,0.14),0_0_72px_rgba(34,211,238,0.10)] md:min-h-[272px] md:p-8',
        !isFeatured &&
          'min-h-[200px] border-white/10 bg-white/5 p-6 hover:border-white/18 hover:bg-white/[0.06] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_18px_52px_rgba(168,85,247,0.10),0_0_56px_rgba(34,211,238,0.08)]',
      )}
    >
      {isPremium && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_0%,rgba(168,85,247,0.20),transparent_50%),radial-gradient(800px_circle_at_95%_85%,rgba(34,211,238,0.16),transparent_52%)] opacity-40 transition-opacity duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-60"
        />
      )}

      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(168,85,247,0.18),transparent_55%),radial-gradient(900px_circle_at_90%_70%,rgba(34,211,238,0.14),transparent_55%)] opacity-0 transition-opacity duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100',
          isFeatured && !isPremium && 'opacity-[0.12] group-hover:opacity-70',
        )}
      />

      <div
        aria-hidden
        className={cn(
          'pointer-events-none absolute inset-x-0 top-0 h-px origin-center bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-[opacity,transform] duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:opacity-100 group-hover:via-white/30',
          isPremium && 'scale-x-[0.85] opacity-50 group-hover:scale-x-100 group-hover:via-white/40',
        )}
      />

      <div
        className={cn(
          'relative flex flex-1 flex-col',
          isFeatured ? 'gap-1' : '',
        )}
      >
        <div
          className={cn(
            'flex items-start justify-between',
            isFeatured ? 'gap-5' : 'gap-4',
          )}
        >
          <div>
            <p
              className={cn(
                'text-xs tracking-[0.25em]',
                isPremium
                  ? 'text-fuchsia-200/55'
                  : isFeatured
                    ? 'text-white/55'
                    : 'text-white/50',
              )}
            >
              {project.period}
            </p>
            <h3
              className={cn(
                'font-display tracking-tight',
                isPremium &&
                  'mt-3.5 bg-gradient-to-br from-white via-white to-white/75 bg-clip-text text-[1.65rem] text-transparent md:mt-4 md:text-3xl lg:text-[2rem]',
                !isPremium &&
                  isFeatured &&
                  'mt-3.5 text-[1.6rem] text-white md:mt-4 md:text-[1.85rem] lg:text-3xl',
                !isFeatured && 'mt-3 text-xl md:text-2xl',
              )}
            >
              {project.title}
            </h3>
          </div>
          <span
            className={cn(
              'shrink-0 rounded-full border px-3 py-2 text-xs transition-[border-color,background-color,color,box-shadow] duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
              isPremium &&
                'border-fuchsia-400/25 bg-gradient-to-r from-fuchsia-500/15 via-white/10 to-cyan-400/10 font-medium tracking-wide text-white/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] group-hover:border-fuchsia-300/35 group-hover:text-white/90',
              !isPremium &&
                isFeatured &&
                'border-white/15 bg-white/8 font-medium tracking-wide text-white/70 group-hover:border-white/22 group-hover:bg-white/10 group-hover:text-white/85',
              !isFeatured &&
                'border-white/10 bg-white/5 text-white/60 group-hover:border-white/15 group-hover:bg-white/8',
            )}
          >
            {isPremium ? 'Featured' : project.stack[0]}
          </span>
        </div>

        <p
          className={cn(
            'leading-relaxed',
            isFeatured
              ? 'mt-5 max-w-2xl text-[0.9375rem] text-white/70 md:mt-6 md:text-base'
              : 'mt-4 text-sm text-white/65',
          )}
        >
          {project.description}
        </p>

        <div
          className={cn(
            'flex flex-wrap',
            isFeatured ? 'mt-6 gap-2.5' : 'mt-5 gap-2',
          )}
        >
          {project.stack.map((t) => (
            <span
              key={t}
              className={cn(
                'rounded-full border text-xs transition-[border-color,background-color,color,box-shadow] duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)]',
                isPremium &&
                  'border-white/15 bg-gradient-to-b from-white/12 to-white/[0.04] px-3.5 py-1.5 font-medium tracking-wide text-white/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.10)] group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white/90',
                !isPremium &&
                  isFeatured &&
                  'border-white/12 bg-white/[0.07] px-3.5 py-1.5 font-medium tracking-wide text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] group-hover:border-white/18 group-hover:bg-white/10 group-hover:text-white/85',
                !isFeatured &&
                  'border-white/10 bg-white/5 px-3 py-2 text-white/60 group-hover:border-white/15 group-hover:bg-white/[0.07]',
              )}
            >
              {t}
            </span>
          ))}
        </div>

        <div
          className={cn(
            'mt-auto flex flex-wrap items-center',
            isFeatured ? 'gap-3 pt-7 md:gap-3.5 md:pt-8' : 'gap-2.5 pt-6',
          )}
        >
          <a
            href={project.hrefs.live || undefined}
            target={project.hrefs.live ? '_blank' : undefined}
            rel={project.hrefs.live ? 'noreferrer' : undefined}
            aria-disabled={!project.hrefs.live}
            className={projectLinkClass({
              variant: 'live',
              disabled: !project.hrefs.live,
              isFeatured,
              isPremium,
            })}
          >
            <ArrowUpRight
              className="h-4 w-4 shrink-0 opacity-80 transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 group-hover/btn:opacity-100"
              aria-hidden="true"
            />
            Live Demo
          </a>
          <a
            href={project.hrefs.github || githubFallback}
            target="_blank"
            rel="noreferrer"
            className={projectLinkClass({
              variant: 'github',
              disabled: false,
              isFeatured,
              isPremium,
            })}
          >
            <Github
              className="h-4 w-4 shrink-0 opacity-80 transition-transform duration-[450ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/btn:scale-105 group-hover/btn:opacity-100"
              aria-hidden="true"
            />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  )
}
