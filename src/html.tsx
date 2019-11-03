import React from "react";

interface IHTMLProps {
  htmlAttributes: object,
  headComponents: any[],
  bodyAttributes: object,
  preBodyComponents: any[],
  body: string,
  postBodyComponents: any[],
};

export default (props: IHTMLProps) => {
  return (
    <html lang="en" { ...props.htmlAttributes }>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="keywords"
          content="prism,programming,language,prismlang,lang,development,source,code,repl"
        />

        <meta name="generator" content="Humanoid" />
        <meta name="author:name" content="Sankarsan Kampa" />
        <meta name="author:alias" content="Traction" />
        <meta name="author:username" content="k3rn31p4nic" />

        <meta property="og:site_name" content="Prism Lang" />
        <meta property="og:url" content="https://prism.traction.one" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="279" />
        <meta property="og:image:height" content="279" />
        <meta property="og:image" content="https://prism.traction.one/og-image.jpg" />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="https://prism.traction.one/favicon.ico" />
        <link rel="icon" type="image/x-icon" href="https://prism.traction.one/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#9f82fe" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000000" />

        { props.headComponents }
      </head>
      <body id="___traction" {...props.bodyAttributes}>
        { props.preBodyComponents }
        <noscript key="noscript" id="gatsby-noscript">
          Guess we won't know what's in here without enabling JavaScript?
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        { props.postBodyComponents }
      </body>
    </html>
  );
};
