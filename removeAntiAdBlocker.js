const removeOverflow = (nodeSelector) => new Promise(resolve => {
  setTimeout(() => {
    let removed = false
    for (const fcAbRoot of document.querySelectorAll(nodeSelector).values()) {
      fcAbRoot.remove()
      removed = true
    }

    const body = document.getElementsByTagName('body')[0]
    body.setAttribute('style', 'overflow: initial !important')
    console.log(body.style.overflow, '<= body.style.overflow')
    resolve(removed)
  }, 5)
})

let retryCount = 6

const recursiveRetry = async () => {
  const hasBeenRemoved = await removeOverflow()
  retryCount = hasBeenRemoved ? 0 : retryCount - 1
  if (retryCount) {
    await Promise.all([
      removeOverflow('.fc-ab-root'),
      removeOverflow('.ev-open-modal-paywall-ADB_DETECTION'),
      removeOverflow('#didomi-host')
    ])
  }
}

console.log('-- Anti Anti AdBlocker v2.0 --')
recursiveRetry().then()

window.addEventListener('load', async function() {
  await Promise.all([
    removeOverflow('.fc-ab-root'), // marca / el país
    removeOverflow('.ev-open-modal-paywall-ADB_DETECTION'), // la vanguardia
    removeOverflow('#didomi-host') // cookiePaywall didomi
  ])
})
