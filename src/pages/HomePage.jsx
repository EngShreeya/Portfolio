import { useMemo, useState } from 'react'
import { sortProjectsForBento, getBentoSpan } from '../lib/projectBento'
import { ProjectCard } from '../components/projects/ProjectCard'
import { motion } from 'framer-motion'
import { ArrowUpRight, FileText, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { variants, transitions } from '../lib/motion'
import { profile } from '../data/profile'
import { Reveal } from '../components/motion/Reveal'
import { Stagger } from '../components/motion/Stagger'
import { Orb } from '../components/ui/Orb'
import { MagneticButton } from '../components/ui/MagneticButton'
import { TiltCard } from '../components/ui/TiltCard'
import { Marquee } from '../components/ui/Marquee'
import { Tabs } from '../components/ui/Tabs'
import { ProgressMeter } from '../components/ui/ProgressMeter'

export function HomePage() {
  const [skillTab, setSkillTab] = useState(profile.skills.categories[0].key)
  const activeSkills = useMemo(
    () => profile.skills.categories.find((c) => c.key === skillTab)?.items ?? [],
    [skillTab],
  )
  const bentoProjects = useMemo(() => sortProjectsForBento(profile.projects), [])

  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants.page}
      transition={transitions.page}
      className="mx-auto w-full max-w-6xl px-6 py-16 md:py-20"
    >
      {/* HERO */}
      <section className="relative min-h-[82vh] grid items-center overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur md:p-12">
        <Orb className="-right-52 -top-52 md:-right-40 md:-top-40" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_45%,rgba(255,255,255,0.02))]" />

        <div className="relative z-10 grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-end">
          <div className="max-w-3xl">
            <Reveal className="font-display text-xs tracking-[0.35em] text-white/55">
              FULLSTACK • MERN • DSA
            </Reveal>

            {/* Name reveal (mask + blur + slide) */}
            <motion.h1
              className="mt-4 font-display text-4xl leading-[1.06] sm:text-5xl md:text-6xl"
              initial="initial"
              animate="animate"
              variants={{
                initial: {},
                animate: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {profile.name.split(' ').map((word) => (
                <span
                  key={word}
                  className="mr-3 inline-block overflow-hidden align-baseline py-2"
                >
                  <motion.span
                    className="inline-block"
                    variants={variants.lineReveal}
                    transition={{ ...transitions.reveal, duration: 0.85 }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            <Reveal delay={0.05} className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              {profile.tagline}
            </Reveal>

            <Reveal delay={0.08} className="mt-7 flex flex-wrap items-center gap-4 text-sm text-white/60">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                {profile.location}
              </span>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 hover:text-white/85 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 rounded-md px-1"
              >
                <Mail className="h-4 w-4" aria-hidden="true" />
                {profile.email}
              </a>
            </Reveal>

            <Reveal delay={0.12} className="mt-10 flex flex-wrap gap-3">
              <MagneticButton href="#projects">
                View projects <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </MagneticButton>
              <MagneticButton
                href="https://drive.google.com/file/d/1OEiR8l3tm6xdtaDxp8zaDe25fSasYA9Q/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resume <FileText className="h-4 w-4" aria-hidden="true" />
              </MagneticButton>
              <MagneticButton
                href="#contact"
                className="bg-gradient-to-r from-fuchsia-500/20 via-cyan-400/10 to-emerald-400/15 shadow-glow hover:shadow-[0_0_0_1px_rgba(255,255,255,0.10),0_0_60px_rgba(34,211,238,0.18)]"
              >
                Let’s collaborate
              </MagneticButton>
            </Reveal>
          </div>

          {/* Hero “device” card */}
          <Reveal delay={0.16}>
            <TiltCard className="p-5">
              <div className="flex items-center justify-between gap-3">
                <p className="font-display text-sm tracking-wide text-white/70">Links</p>
                <span className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] text-white/55">
                  AVAILABLE
                </span>
              </div>
              <div className="mt-4 grid gap-2">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/8 hover:border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-400/60"
                >
                  <span className="inline-flex items-center gap-2">
                    <Github className="h-4 w-4" aria-hidden="true" />
                    GitHub
                  </span>
                  <ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:bg-white/8 hover:border-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
                >
                  <span className="inline-flex items-center gap-2">
                    <Linkedin className="h-4 w-4" aria-hidden="true" />
                    LinkedIn
                  </span>
                  <ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

              <div className="mt-5 rounded-2xl border border-white/10 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(168,85,247,0.20),transparent_55%),radial-gradient(700px_circle_at_90%_60%,rgba(34,211,238,0.16),transparent_55%)] p-4">
                <p className="text-xs font-medium tracking-wide text-white/70">Now</p>
                <p className="mt-1 text-sm text-white/65">
                  Exploring UI motion systems + shipping mini products.
                </p>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mt-24 md:mt-28">
        <div className="grid items-start gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
          <Reveal>
            <div className="space-y-6">
              <div>
                <p className="font-display text-xs tracking-[0.35em] text-white/55">ABOUT</p>
                <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">
                 Building modern full-stack web experiences.
                </h2>
              </div>
              <div className="space-y-4 text-white/70 leading-relaxed">
                {profile.about.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>

              <div className="space-y-3 pt-2">
                {profile.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-white/15"
                  >
                    <p className="text-xs tracking-[0.25em] text-white/50">{h.label}</p>
                    <p className="mt-1.5 text-sm text-white/75">{h.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex justify-center md:justify-end">
              {/* <TiltCard className="w-full max-w-[280px] p-5 md:p-6"> */}
                <TiltCard className="w-full max-w-[320px] rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-7 shadow-[0_0_60px_rgba(34,211,238,0.08)] backdrop-blur-xl">
                <div className="flex items-center justify-between mb-4">
                  <p className="font-display text-sm tracking-wide text-white/70">Portrait</p>
                  {/* <span className="text-xs text-white/40">parallax tilt</span> */}
                </div>
                <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(900px_circle_at_30%_15%,rgba(236,72,153,0.20),transparent_55%),radial-gradient(900px_circle_at_80%_80%,rgba(34,211,238,0.18),transparent_55%)]">
                  <img
                    src="/shreeya-photo.png"
                    alt="Shreeya Agarwal"
                    className="h-full w-full object-cover object-center"
                    loading="lazy"
                  />
                </div>
                <p className="mt-4 text-xs text-white/60 leading-relaxed">
                  
                </p>
              </TiltCard>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="mt-24 md:mt-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-display text-xs tracking-[0.35em] text-white/55">SKILLS</p>
              <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
             Modern technologies for full-stack development.
              </h2>
            </div>
            <Tabs value={skillTab} onChange={setSkillTab} items={profile.skills.categories} />
          </div>
        </Reveal>

        <Reveal delay={0.06} className="mt-8">
          <Marquee items={profile.skills.marquee} />
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="font-display text-sm tracking-wide text-white/70">
                {profile.skills.categories.find((c) => c.key === skillTab)?.label}
              </p>
              <div className="mt-6 grid gap-4">
                {activeSkills.map((s) => (
                  <ProgressMeter key={s.name} label={s.name} value={s.level} />
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="rounded-3xl border border-white/10 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(168,85,247,0.18),transparent_55%),radial-gradient(900px_circle_at_90%_60%,rgba(34,211,238,0.14),transparent_55%)] p-6">
              <p className="font-display text-sm tracking-wide text-white/70">Development approach</p>
              <ul className="mt-4 grid gap-3 text-sm text-white/65">
                <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Creating modern full-stack applications with practical functionality.
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Focused on responsive design, backend integration, and user experience.
                </li>
                <li className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  Continuously learning through projects, problem solving, and development.
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="projects" className="mt-24">
        <Reveal>
          <p className="font-display text-xs tracking-[0.35em] text-white/55">PROJECTS</p>
          <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
            Featured builds and experiments.
          </h2>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-12 lg:gap-5">
          {bentoProjects.map((p, idx) => (
            <Reveal
              key={p.title}
              delay={idx * 0.04}
              className={`h-full ${getBentoSpan(idx, p)}`}
            >
              <ProjectCard
                project={p}
                featured={Boolean(p.featured)}
                githubFallback={profile.links.github}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* EXPERIENCE / EDUCATION */}
      <section id="experience" className="mt-24 md:mt-28">
        <Reveal>
          <p className="font-display text-xs tracking-[0.35em] text-white/55">
            EXPERIENCE / EDUCATION
          </p>
          <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
            {/* A timeline of focus + momentum. */}
            A journey of learning, development, and leadership.
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="relative">
            <div className="absolute left-[11px] top-2 bottom-2 w-px bg-white/10" />
            <Stagger className="grid gap-4">
              {profile.timeline.map((t) => (
                <motion.div
                  key={`${t.title}-${t.time}`}
                  variants={variants.fadeUp}
                  transition={transitions.reveal}
                  className="relative pl-10"
                >
                  <motion.div
                    className="absolute left-0 top-2 h-6 w-6 rounded-full border border-white/15 bg-white/5 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.06)]"
                    initial={false}
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.div
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    initial={false}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <motion.div
                      className="flex flex-wrap items-baseline justify-between gap-3"
                      initial={false}
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p className="font-display text-base tracking-tight text-white/85">
                        {t.title}
                      </p>
                      <p className="text-xs tracking-[0.25em] text-white/45">
                        {t.time}
                      </p>
                    </motion.div>
                    <motion.p
                      className="mt-2 text-sm text-white/65"
                      initial={false}
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {t.org} • <span className="text-white/55">{t.meta}</span>
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </Stagger>
          </div>

          <Reveal delay={0.05}>
            <motion.div
              className="grid gap-3 md:grid-cols-2"
              initial={false}
              whileHover={{ x: 2 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {profile.certificates.map((c) => (
                <motion.div
                  key={c.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  initial={false}
                  whileHover={{ x: 4, scale: 1.01 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p className="font-display text-sm text-white/80">{c.title}</p>
                  <p className="mt-1 text-xs text-white/55">
                    {c.org} • {c.time}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </Reveal>
        </div>
      </section>

      <section id="contact" className="mt-24">
        <Reveal>
          <p className="font-display text-xs tracking-[0.35em] text-white/55">CONTACT</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
            Open to internships, collaborations, and exciting projects.
          </h2>
        </Reveal>
        <motion.div
  className="mt-12 flex justify-center"
  initial={false}
  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
>
  <Reveal className="w-full max-w-2xl">
    <motion.div
      className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl shadow-[0_0_60px_rgba(168,85,247,0.08)] transition"
      initial={false}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <p className="text-xs tracking-[0.3em] text-white/45">
        CONTACT
      </p>

      <h3 className="mt-4 font-display text-2xl tracking-tight text-white/90">
        Prefer email? I respond quickly.
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-white/60">
        Open to internships, collaborations, freelance opportunities,
        and exciting projects.
      </p>

      <div className="mt-8 flex flex-col gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/85 transition hover:border-cyan-300/20 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
        >
          <Mail className="h-5 w-5 shrink-0" aria-hidden="true" />
          {profile.email}
        </a>
        <a
          href={`tel:${profile.phone.replace(/[^\d+]/g, '')}`}
          className="inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white/85 transition hover:border-cyan-300/20 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60"
        >
          <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
          {profile.phone}
        </a>
      </div>
    </motion.div>
    
  </Reveal>
</motion.div>


      </section>
    </motion.main>
  )
}

        
