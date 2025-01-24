function GoogleTag() {
  return(
    {/* Google tag (gtag.js) */}
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-CRFMGJ9Y7D" />
    <Script> 
      {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-CRFMGJ9Y7D');`}
    </Script>
  )
}

export { GoogleTag }
