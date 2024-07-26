import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="MoonClash, crypto, token tokenomics, saga, bitcoin, solana" />
        <meta name="author" content="MoonClash Company" />
        <meta property="og:title" content="MoonClash – A Cryptocurrency Saga" />
        <meta property="og:description" content="MoonClash (MCLSH) is more than just a memecoin. It is an epic story of ambition, innovation, and power that can transform the world of cryptocurrency. Join us on this exciting journey and become part of a new era in financial technology." />
        <meta property="og:image" content="/preview.png" />
        <meta property="og:url" content="https://moonclash.top" />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@your_twitter_handle" /> */}
        <meta name="twitter:title" content="MoonClash – A Cryptocurrency Saga" />
        <meta name="twitter:description" content="MoonClash (MCLSH) is more than just a memecoin. It is an epic story of ambition, innovation, and power that can transform the world of cryptocurrency. Join us on this exciting journey and become part of a new era in financial technology." />
        <meta name="twitter:image" content="/preview.png" />
        
        <link rel="icon" href="/coin-2.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
