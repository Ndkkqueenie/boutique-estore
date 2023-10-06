import Document, { Html, Head, Main, NextScript } from "next/document";
import GoogleFonts from "next-google-fonts";

import { GA_TRACKING_ID } from "../lib/gtag";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta name="title" content="Glam Boutique" key="title" />
          <meta name="description" content="Glam Boutique eStore, get your elegant piece from our 5 star boutique with worldwide shipping!" />
          <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" />
          <GoogleFonts href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@500&display=swap" />
          {GA_TRACKING_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
              />
            </>
          )}
        </Head>
        <body className="antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
