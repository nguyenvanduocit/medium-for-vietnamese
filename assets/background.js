const handler = (info) => {
  if (info.tabId === -1) {
    return {}
  }
  return {redirectUrl: chrome.extension.getURL('assets/fontface.css')}
}
const options = {
  urls: ['https://glyph.medium.com/css/e/sr/latin/e/ssr/latin/e/ssb/latin/m2.css'],
  types: ['stylesheet']
}
/* global chrome */
chrome.webRequest.onBeforeRequest.addListener(handler, options, ['blocking'])
