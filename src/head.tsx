"use client";

import { GoogleTag } from "@/config/head/gtag";

function HeadInnerHTML() {
  return (
    <>
      <link rel="apple-touch-icon" sizes="180x180" href="https://img.juststudio.is-a.dev/cs/ico/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="https://img.juststudio.is-a.dev/cs/ico/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="https://img.juststudio.is-a.dev/cs/ico/favicon-16x16.png" />
      <link rel="manifest" href="https://img.juststudio.is-a.dev/cs/ico/site.webmanifest" />
      <meta property="og:url" content="https://codeshare.js.org/" />
      <meta property="og:title" content="CodeShare" />
      <meta property="og:site_name" content="CodeShare" />
      <meta property="og:description" content="CodeShare is the best tool for storing and sharing codes and text, aka paste tool." />
      <meta property="og:image" content="https://j.is-a.dev/CodeShare/public/static/images/banner/CodeShare.min.svg" />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="CodeShare" />
      <meta property="twitter:description" content="CodeShare is the best tool for storing and sharing codes and text, aka paste tool." />
      <meta property="twitter:image" content="https://j.is-a.dev/CodeShare/public/static/images/banner/CodeShare.svg" />
      <GoogleTag />
    </>
  )
}

export { HeadInnerHTML }
