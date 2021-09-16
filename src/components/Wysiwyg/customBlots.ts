import Quill from 'quill'

export const GLOSSARY_BLOT_NAME = 'glossary'

export const addGlossaryBlotToQuill = () => {
  const InlineBlot = Quill.import('blots/inline')

  // Creates a new blot based on 'inline' blot
  class GlossaryBlot extends InlineBlot {
    static create(id) {
      const node = super.create()
      // Set attributes that are needed for react-tooltip component
      node.setAttribute('data-tip', 'true')

      // Set id attribute that are needed for react-tooltip component
      // this is necessary for matching correct tooltip with correct glossary word
      node.setAttribute('data-for', id)
      return node
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
