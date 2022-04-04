import Quill from 'quill'

export const GLOSSARY_BLOT_NAME = 'glossary'
export const CUSTOM_IMAGE_BLOT_NAME = 's3-image'

export const ADMIN_HIGHLIGHTS_BLOT_NAME = 'a-highlights'

export const GREEN_HIGHLIGHTS_BLOT_NAME = 'green-highlights'
export const YELLOW_HIGHLIGHTS_BLOT_NAME = 'yellow-highlights'
export const PURPLE_HIGHLIGHTS_BLOT_NAME = 'purple-highlights'
export const BLUE_HIGHLIGHTS_BLOT_NAME = 'blue-highlights'
export const RED_HIGHLIGHTS_BLOT_NAME = 'red-highlights'
export const ORANGE_HIGHLIGHTS_BLOT_NAME = 'orange-highlights'

export const FONT_COLOR_BLUE = 'font-color-blue'
export const FONT_COLOR_ORANGE = 'font-color-orange'
export const FONT_COLOR_GREEN = 'font-color-green'
export const FONT_COLOR_PURPLE = 'font-color-purple'
export const FONT_COLOR_BLACK = 'font-color-black'
export const FONT_COLOR_BROWN = 'font-color-brown'
export const FONT_COLOR_RED = 'font-color-red'
export const FONT_COLOR_YELLOW = 'font-color-yellow'
export const FONT_COLOR_GREY = 'font-color-grey'
export const FONT_COLOR_VIOLET = 'font-color-violet'
export const FONT_COLOR_LIGHTRED = 'font-color-lightRed'
export const FONT_COLOR_AZURE = 'font-color-azure'
export const FONT_COLOR_LIGHTGREEN = 'font-color-lightGreen'
export const FONT_COLOR_LIGHTBROWN = 'font-color-lightBrown'

Quill.debug('error')

export const addGlossaryBlotToQuill = () => {
  const InlineBlot = Quill.import('blots/inline')

  // Creates a new blot based on 'inline' blot
  // @ts-ignore
  class GlossaryBlot extends InlineBlot {
    static create(id) {
      const node = super.create()

      if (typeof id === 'string') {
        // Set attributes that are needed for react-tooltip component
        node.setAttribute('data-tip', 'true')

        // Set id attribute that are needed for react-tooltip component
        // this is necessary for matching correct tooltip with correct glossary word
        node.setAttribute('data-for', id)
        return node
      }
    }

    static formats(node) {
      return node.getAttribute('data-for')
    }
  }

  // Set custom blot name that will be used as a format
  // @ts-ignore
  GlossaryBlot.blotName = GLOSSARY_BLOT_NAME

  // Set custom blot html tag name
  // @ts-ignore
  GlossaryBlot.tagName = 'span'

  // Set custom blot special className
  // @ts-ignore
  GlossaryBlot.className = 'glossary-word'

  Quill.register(GlossaryBlot)
}

export const addImageBlotToQuill = () => {
  const ImageBlot = Quill.import('formats/image')

  // Converts the HTML tag to image blot
  // @ts-ignore
  class CustomImageBlot extends ImageBlot {
    static create(value) {
      const node = super.create()
      // Set attributes that are needed for img tag
      node.setAttribute('src', value.url)
      node.setAttribute('alt', value.id)
      return node
    }

    // Converts the image blot to HTML tag
    static value(node) {
      const blot = { url: '', alt: '' }

      blot.url = node.getAttribute('src')
      blot.alt = node.getAttribute('alt')

      return blot
    }
  }

  // Set custom blot name that will be used as a format
  // @ts-ignore
  CustomImageBlot.blotName = CUSTOM_IMAGE_BLOT_NAME

  // Set custom blot html tag name
  // @ts-ignore
  CustomImageBlot.tagName = 'img'

  Quill.register(CustomImageBlot)
}

export const addAdminHighlightsBlotToQuill = () => {
  const InlineBlot = Quill.import('blots/inline')

  // Creates a new blot based on 'inline' blot
  // @ts-ignore
  class AdminHighlightsBlot extends InlineBlot {
    static blotName = ADMIN_HIGHLIGHTS_BLOT_NAME
    static className = 'admin-highlights'
    static tagName = 'span'

    static formats(): boolean {
      return true
    }
  }

  Quill.register(AdminHighlightsBlot)
}

const createColorBlot = (blotName, className) => {
  const InlineBlot = Quill.import('blots/inline')

  // Creates a new blot based on 'inline' blot
  // @ts-ignore
  class colorBlot extends InlineBlot {
    static blotName = blotName
    static className = className
    static tagName = 'span'

    static formats(): boolean {
      return true
    }
  }

  Quill.register(colorBlot)
}

export const addGreenHighlightsBlotToQuill = () => {
  createColorBlot(GREEN_HIGHLIGHTS_BLOT_NAME, 'green-highlight')
}

export const addYellowHighlightsBlotToQuill = () => {
  createColorBlot(YELLOW_HIGHLIGHTS_BLOT_NAME, 'yellow-highlight')
}

export const addPurpleHighlightsBlotToQuill = () => {
  createColorBlot(PURPLE_HIGHLIGHTS_BLOT_NAME, 'purple-highlight')
}

export const addBlueHighlightsBlotToQuill = () => {
  createColorBlot(BLUE_HIGHLIGHTS_BLOT_NAME, 'blue-highlight')
}

export const addRedHighlightsBlotToQuill = () => {
  createColorBlot(RED_HIGHLIGHTS_BLOT_NAME, 'red-highlight')
}

export const addOrangeHighlightsBlotToQuill = () => {
  createColorBlot(ORANGE_HIGHLIGHTS_BLOT_NAME, 'orange-highlight')
}

export const addHighlightBlots = () => {
  addGreenHighlightsBlotToQuill()
  addYellowHighlightsBlotToQuill()
  addPurpleHighlightsBlotToQuill()
  addBlueHighlightsBlotToQuill()
  addRedHighlightsBlotToQuill()
  addOrangeHighlightsBlotToQuill()
}

const createFontColorBlot = (blotName, className) => {
  const InlineBlot = Quill.import('blots/inline')

  // Creates a new blot based on 'inline' blot
  // @ts-ignore
  class fontColorBlot extends InlineBlot {
    static blotName = blotName
    static className = className
    static tagName = 'span'

    static formats(): boolean {
      return true
    }
  }

  Quill.register(fontColorBlot)
}

export const addBlueFontColorBlotToQuill = () => {
  createFontColorBlot(FONT_COLOR_BLUE, 'color-blue')
}

export const addOrangeFontColorBlotToQuill = () => {
  createFontColorBlot(FONT_COLOR_ORANGE, 'color-orange')
}

export const addGreenFontColorBlotToQuill = () => {
  createFontColorBlot(FONT_COLOR_GREEN, 'color-green')
}

export const addPurpleFontColorBlotToQuill = () => {
  createFontColorBlot(FONT_COLOR_PURPLE, 'color-purple')
}

export const addBlackFontColorBlotToQuill = () => {
  createFontColorBlot(FONT_COLOR_BLACK, 'color-black')
}

export const addBrownFontColorBlotToQuill = () => {
  createFontColorBlot(FONT_COLOR_BROWN, 'color-brown')
}

export const addRedFontColorBlotToQuill = () => {
  createFontColorBlot(FONT_COLOR_RED, 'color-red')
}

export const addYellowFontColorBlotToQuill = () => {
  createFontColorBlot(FONT_COLOR_YELLOW, 'color-yellow')
}

export const addGreyFontColorBlotToQuill = () => {
  createFontColorBlot(FONT_COLOR_GREY, 'color-grey')
}

export const addVioletFontColorBlotToQuill = () => {
  createFontColorBlot(FONT_COLOR_VIOLET, 'color-violet')
}

export const addLightRedFontColorBlotToQuill = () => {
  createFontColorBlot(FONT_COLOR_LIGHTRED, 'color-lightRed')
}

export const addAzureFontColorBlotToQuill = () => {
  createFontColorBlot(FONT_COLOR_AZURE, 'color-azure')
}

export const addLightGreenFontColorBlotToQuill = () => {
  createFontColorBlot(FONT_COLOR_LIGHTGREEN, 'color-lightGreen')
}

export const addLightBrownFontColorBlotToQuill = () => {
  createFontColorBlot(FONT_COLOR_LIGHTBROWN, 'color-lightBrown')
}

export const addFontColorBlots = () => {
  addBlueFontColorBlotToQuill()
  addOrangeFontColorBlotToQuill()
  addGreenFontColorBlotToQuill()
  addPurpleFontColorBlotToQuill()
  addBlackFontColorBlotToQuill()
  addBrownFontColorBlotToQuill()
  addRedFontColorBlotToQuill()
  addYellowFontColorBlotToQuill()
  addGreyFontColorBlotToQuill()
  addVioletFontColorBlotToQuill()
  addLightRedFontColorBlotToQuill()
  addAzureFontColorBlotToQuill()
  addLightGreenFontColorBlotToQuill()
  addLightBrownFontColorBlotToQuill()
}
