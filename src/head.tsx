import { GoogleTag } from "@/config/head/gtag";

function HeadInnerHTML() {
  return (
    <>
      <link rel="stylesheet" type="text/css" href="/css/style.css" />
      <GoogleTag />
    </>
  )
}

export { HeadInnerHTML }
