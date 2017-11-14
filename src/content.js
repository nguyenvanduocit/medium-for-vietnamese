import css from './fontface.raw.css'
let style = document.createElement('style')
style.type = 'text/css'
if (style.styleSheet) {
  style.styleSheet.cssText = css
} else {
  style.appendChild(document.createTextNode(css))
}
let head = document.getElementsByTagName('head')
head[0].appendChild(style)
