// used code from: https://stackoverflow.com/a/8106283
// @ts-ignore
function componentFromStr(numStr, percent) {
  const num = Math.max(0, parseInt(numStr, 10))
  return percent
    ? Math.floor((255 * Math.min(100, num)) / 100)
    : Math.min(255, num)
}

const rgbRegex = /^rgb\(\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*,\s*(-?\d+)(%?)\s*\)$/
const hexRegex = /^#?([a-f\d]{6})$/
const shortHexRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/

function Colour(this: any, r, g, b) {
  // Make a new Colour object even when Colour is not called with the new operator
  if (!(this instanceof Colour)) {
    // @ts-ignore
    return new Colour(r, g, b)
  }

  if (typeof g === 'undefined') {
    // Parse the colour string
    const colStr = r.toLowerCase()
    let result

    // Check for hex value first, the short hex value, then rgb value
    if ((result = hexRegex.exec(colStr))) {
      const hexNum = parseInt(result[1], 16)
      r = hexNum >> 16
      g = (hexNum & 0xff00) >> 8
      b = hexNum & 0xff
    } else if ((result = shortHexRegex.exec(colStr))) {
      r = parseInt(result[1] + result[1], 16)
      g = parseInt(result[2] + result[2], 16)
      b = parseInt(result[3] + result[3], 16)
    } else if ((result = rgbRegex.exec(colStr))) {
      r = componentFromStr(result[1], result[2])
      g = componentFromStr(result[3], result[4])
      b = componentFromStr(result[5], result[6])
    } else {
      throw new Error("Colour: Unable to parse colour string '" + colStr + "'")
    }
  }

  // @ts-ignore
  this.r = r
  // @ts-ignore
  this.g = g
  // @ts-ignore
  this.b = b
}

Colour.prototype = {
  equals: function (colour) {
    return this.r === colour.r && this.g === colour.g && this.b === colour.b
  }
}

function makeEditableAndHighlight(colour) {
  let range
  const sel = window.getSelection()
  // @ts-ignore
  if (sel.rangeCount && sel.getRangeAt) {
    // @ts-ignore
    range = sel.getRangeAt(0)
  }
  document.designMode = 'on'
  if (range) {
    // @ts-ignore
    sel.removeAllRanges()
    // @ts-ignore
    sel.addRange(range)
  }
  // Use HiliteColor since some browsers apply BackColor to the whole block
  if (!document.execCommand('HiliteColor', false, colour)) {
    document.execCommand('BackColor', false, colour)
  }
  document.designMode = 'off'
}

// eslint-disable-next-line no-unused-vars
export function highlight(colour) {
  let range
  // eslint-disable-next-line no-unused-vars
  // @ts-ignore
  if (window.getSelection) {
    // IE9 and non-IE
    try {
      if (!document.execCommand('BackColor', false, colour)) {
        makeEditableAndHighlight(colour)
      }
    } catch (ex) {
      makeEditableAndHighlight(colour)
    }
    // @ts-ignore
  } else if (document.selection && document.selection.createRange) {
    // IE <= 8 case
    // @ts-ignore
    range = document.selection.createRange()
    range.execCommand('BackColor', false, colour)
  }
}

// @ts-ignore
// eslint-disable-next-line no-unused-vars
let getComputedStyleProperty

if (typeof window.getComputedStyle !== 'undefined') {
  getComputedStyleProperty = function (el, propName) {
    return window.getComputedStyle(el, null)[propName]
  }
  // @ts-ignore
} else if (typeof document.documentElement.currentStyle !== 'undefined') {
  getComputedStyleProperty = function (el, propName) {
    return el.currentStyle[propName]
  }
}

// eslint-disable-next-line no-unused-vars
// export function unhighlight(node, colour) {
//   if (!(colour instanceof Colour)) {
//     // @ts-ignore
//     colour = new Colour(colour)
//   }
//
//   if (node.nodeType === 1) {
//     const bg = node.style.backgroundColor
//     // @ts-ignore
//     if (bg && colour.equals(new Colour(bg))) {
//       node.style.backgroundColor = ''
//     }
//   }
//   let child = node.firstChild
//   while (child) {
//     unhighlight(child, colour)
//     child = child.nextSibling
//   }
// }

function makeEditableAndStrikethrough() {
  let range
  const sel = window.getSelection()
  // @ts-ignore
  if (sel.rangeCount && sel.getRangeAt) {
    // @ts-ignore
    range = sel.getRangeAt(0)
  }
  document.designMode = 'on'
  if (range) {
    // @ts-ignore
    sel.removeAllRanges()
    // @ts-ignore
    sel.addRange(range)
  }
  if (!document.execCommand('strikeThrough')) {
    document.execCommand('strikeThrough')
  }
  document.designMode = 'off'
}

// eslint-disable-next-line no-unused-vars
export function strikethrough() {
  let range
  // eslint-disable-next-line no-unused-vars
  // @ts-ignore
  if (window.getSelection) {
    // IE9 and non-IE
    try {
      if (!document.execCommand('strikeThrough')) {
        makeEditableAndStrikethrough()
      }
    } catch (ex) {
      makeEditableAndStrikethrough()
    }
    // @ts-ignore
  } else if (document.selection && document.selection.createRange) {
    // IE <= 8 case
    // @ts-ignore
    range = document.selection.createRange()
    range.execCommand('strikeThrough')
  }
}
