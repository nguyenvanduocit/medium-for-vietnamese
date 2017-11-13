import css from './content.raw.css'
/* global chrome */
let assetPath = chrome.runtime.getURL('assets/fonts')
let replacedCss = css.replace(/__EXTENSION_URL__/g, assetPath)
console.log(replacedCss)
let style = document.createElement('style')
style.type = 'text/css'
if (style.styleSheet) {
  style.styleSheet.cssText = replacedCss
} else {
  style.appendChild(document.createTextNode(replacedCss))
}
let head = document.getElementsByTagName('head')
head[0].appendChild(style)
