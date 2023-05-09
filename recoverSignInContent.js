let registerContentCount = 6

const showTheCountryRegisterOnlyContent = () => {
  const content = document.querySelector('[data-dtm-region=articulo_cuerpo]')
  if (content) {
    const info = content.innerHTML
    setTimeout(() => {
      console.log('content.innerHTML', content.innerHTML)
      content.innerHTML = info
      const freemiumBanner = document.querySelector('#ctn_freemium_article')
      if (freemiumBanner) {
        freemiumBanner.remove()
      }
    }, 1000)
  } else {
    registerContentCount -= 1
    setTimeout(() => {
      showTheCountryRegisterOnlyContent()
    }, 200)
  }
}

showTheCountryRegisterOnlyContent()
