import { GoogleTag } from "@/config/head/gtag";

function HeadInnerHTML() {
  return (
    <>
      <meta property="og:url" content="https://codeshare.js.org/" />
      <meta property="og:title" content="CodeShare" />
      <meta property="og:site_name" content="CodeShare" />
      <meta property="og:description" content="CodeShare is the best tool for storing and sharing codes and text, aka paste tool." />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content="CodeShare" />
      <meta property="twitter:description" content="CodeShare is the best tool for storing and sharing codes and text, aka paste tool." />
      <GoogleTag />
    </>
  )
}

export { HeadInnerHTML }
