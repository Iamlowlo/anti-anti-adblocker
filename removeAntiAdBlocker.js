const removeOverflow = () => new Promise(resolve => {
  setTimeout(() => {
    let removed = false
    for (const fcAbRoot of document.querySelectorAll('.fc-ab-root').values()) {
      fcAbRoot.remove()
      removed = true
    }

    const body = document.getElementsByTagName('body')[0]
    body.style.overflow = 'initial'
    resolve(removed)
  }, 5)
})

let retryCount = 6

const recursiveRetry = async () => {
  const hasBeenRemoved = await removeOverflow()
  retryCount = hasBeenRemoved ? 0 : retryCount - 1
  if (retryCount) {
    await recursiveRetry()
  }
}

console.log('-- Anti Anti AdBlocker v2.0 --')
recursiveRetry().then()

window.addEventListener('load', async function() {
    await removeOverflow()
})
