window.addEventListener('load', function() {
  console.log('Anti Anti AdBlocker')
  for (const fcAbRoot of document.querySelectorAll('.fc-ab-root').values()) {
    fcAbRoot.remove()
  }
  setTimeout(() => {
    const body = document.getElementsByTagName('body')[0]
    body.style.overflow = 'initial'
  }, 5)
})
