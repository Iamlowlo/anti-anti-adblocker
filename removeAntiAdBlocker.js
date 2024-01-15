const WALL_SELECTORS = [
  '.fc-ab-root',
  '.ev-open-modal-paywall-ADB_DETECTION',
  '#didomi-host',
  '[data-nosnippet="data-nosnippet"] div div',
]
const removeOverflow = (nodeSelector) => new Promise(resolve => {
  setTimeout(() => {
    let removed = false
    for (const fcAbRoot of document.querySelectorAll(nodeSelector).values()) {
      fcAbRoot.remove()
      removed = true
    }

    const body = document.getElementsByTagName('body')[0]
    body.setAttribute('style', 'overflow: initial !important')
    resolve(removed)
  }, 5)
})

let retryCount = 6

const recursiveRetry = async () => {
  const hasBeenRemoved = await removeOverflow()
  retryCount = hasBeenRemoved ? 0 : retryCount - 1
  if (retryCount) {
    console.log(retryCount, '<= retryCount')
    await Promise.all(WALL_SELECTORS.map(removeOverflow))
  }
}

console.log('-- Anti Anti AdBlocker v2.0 --')
recursiveRetry().then()

window.addEventListener('load', async function() {
  await Promise.all(WALL_SELECTORS.map(removeOverflow))
})
