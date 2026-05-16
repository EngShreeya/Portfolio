import { Helmet } from 'react-helmet-async'

export function SiteMeta() {
  const title = 'Shreeya Agarwal — Developer Portfolio'
  const description =
    'Cinematic, motion-first developer portfolio of Shreeya Agarwal (Delhi).'
  const url = typeof window !== 'undefined' ? window.location.href : '/'

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

