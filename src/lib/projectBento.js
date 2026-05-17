/** Bento grid column spans — 12-col desktop, 2-col tablet, 1-col mobile */
export const bentoSpans = {
  featuredPrimary: 'col-span-1 sm:col-span-2 lg:col-span-7',
  featuredSecondary: 'col-span-1 sm:col-span-2 lg:col-span-5',
  standard: 'col-span-1 sm:col-span-1 lg:col-span-4',
}

export function sortProjectsForBento(projects) {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)
  return [...featured, ...rest]
}

export function getBentoSpan(index, project) {
  if (project.featured && index === 0) return bentoSpans.featuredPrimary
  if (project.featured && index === 1) return bentoSpans.featuredSecondary
  return bentoSpans.standard
}
