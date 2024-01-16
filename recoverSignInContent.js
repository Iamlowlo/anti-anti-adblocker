let registerContentCount = 6

const showTheCountryRegisterOnlyContent = () => {
  const content = document.querySelector('[data-dtm-region=articulo_cuerpo]')
  const referenceNode = document.querySelector('[data-dtm-region=articulo_cuerpo] + *')
  if (content) {
    const info = content.innerHTML
    setTimeout(() => {
      const newNode = document.createElement('div')
      newNode.classList.add('a_c','clearfix')
      newNode.innerHTML = info
      const hiddenContent = newNode.querySelectorAll('._dn')
      Array.from(hiddenContent).forEach(node => {
        node.classList.remove('_dn')
      })
      referenceNode.parentNode.insertBefore(newNode, referenceNode)
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
