import Script from 'next/script';

function GoogleTag() {
  return(
    <>
      {/* Google tag (gtag.js) */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CRFMGJ9Y7D" />
      <Script id="gtag"> 
        {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-CRFMGJ9Y7D');`}
      </Script>
      {/* End Google tag */}
    </>
  )
}

export { GoogleTag }
