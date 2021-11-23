import Quill from 'quill'

export const GLOSSARY_BLOT_NAME = 'glossary'
export const CUSTOM_IMAGE_BLOT_NAME = 's3-image'
export const ADMIN_HIGHLIGHTS_BLOT_NAME = 'a-highlights'

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
