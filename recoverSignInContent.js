let registerContentCount = 6

const showTheCountryRegisterOnlyContent = () => {
  const content = document.getElementById('ctn_article_body')

  if (content) {
    const info = content.innerHTML
    setTimeout(() => {
      console.log('content.innerHTML', content.innerHTML)
      content.innerHTML = info
    }, 1000)
  } else {
    registerContentCount -= 1
    setTimeout(() => {
      showTheCountryRegisterOnlyContent()
    }, 200)
  }
}

showTheCountryRegisterOnlyContent()
