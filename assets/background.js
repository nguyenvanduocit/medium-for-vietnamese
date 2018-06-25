const fileMap = {
  'https://glyph.medium.com/css/e/sr/latin/e/ssr/latin/e/ssb/latin/m2.css': 'assets/css/medium.css',
  'https://s.gr-assets.com/assets/gr/fonts-e256f84093cc13b27f5b82343398031a.css': 'assets/css/goodreads.css'
}

const handler = (info) => {
  if (info.tabId === -1) {
    return {}
  }
  return {
    redirectUrl: chrome.extension.getURL(fileMap[info.url])
  }
}
const options = {
  urls: Object.keys(fileMap),
  types: ['stylesheet']
}

const browser = browser || chrome
browser.webRequest.onBeforeRequest.addListener(handler, options, ['blocking'])
