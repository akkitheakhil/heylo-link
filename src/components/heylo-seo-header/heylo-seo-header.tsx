export interface HeyloSEOHeaderProps {
  title: string;
  description: string;
  ogImage?: {
    title?: string;
    subtitle?: string;
  };
  ogType?: 'website' | 'article';
}

export function HeyloSEOHeader({
  title,
  description,
  ogType = 'website',
}: HeyloSEOHeaderProps) {
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />


      <meta name="author" content="Akhil Padmanabhan" />

      <meta
        property="og:image"
        content="https://firebasestorage.googleapis.com/v0/b/heylo-store.appspot.com/o/thumbnail.png?alt=media"
      />
      <meta property="og:url" content="https://heylo.link" />

      <meta property="og:site_name" content="Heylo Link" />
      <meta name="twitter:image:alt" content={description} />
      <link rel="shortcut icon" href="favicon.ico" />

      <link rel="apple-touch-icon" sizes="180x180" href="/Icon.png" />
      <link rel="icon" type="image/x-icon" href="favicon.ico"></link>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link rel="icon" href="./favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" href="/icon.png"></link>
      <meta name="theme-color" content="#F2F2F2" />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </>
  );
}

export default HeyloSEOHeader;
