// Wysiwyg/Wysiwyg.tsx - Wysiwyg component

import React from 'react'
import styled from 'styled-components'
import ReactTooltip from 'react-tooltip'
import * as R from 'ramda'

import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import SingleSelect from '../SingleSelect/SingleSelect'

import { GLOSSARY_BLOT_NAME, addGlossaryBlotToQuill } from './customBlots'

interface AddGlossaryButtonProps {
  editorInstance: any
  glossaryDefinitions?: {
    id: string
    word: string
    content: string
  }[]
}

const AddGlossaryButton = (props: AddGlossaryButtonProps): JSX.Element => {
  const { editorInstance, glossaryDefinitions } = props
  const [isOpen, setVisibility] = React.useState(false)
  const [selectedId, setSelectedId] = React.useState('')

  const handleOpen = () => setVisibility(true)
  const handleClose = () => setVisibility(false)

  React.useEffect(() => {
    addGlossaryBlotToQuill()
  }, [])

  const handleGlossary = selectedId => {
    // @ts-ignore
    editorInstance.format(GLOSSARY_BLOT_NAME, selectedId)
    setTimeout(() => {
      ReactTooltip.rebuild()
    }, 100)
  }

  const renderTooltips = R.map(definition => (
    <ReactTooltip
      id={definition.id}
      key={`${definition.id}-tooltip`}
      place='top'
      effect='solid'
      data-class='tooltip-content'
      clickable
    >
      {definition.content}
    </ReactTooltip>
  ))(glossaryDefinitions)

  const handleSubmitModal = e => {
    e.preventDefault()
    handleGlossary(selectedId)
    handleClose()
    setSelectedId('')
  }

  const glossaryOptions = R.map(definition => ({
    label: definition.word,
    value: definition.id
  }))(glossaryDefinitions)

  const selectedOption = R.pipe(R.find(R.propEq('value', selectedId)))(
    glossaryOptions
  )

  const handleChange = option => setSelectedId(option.value)

  return (
    <ButtonContainer>
      <button className='ql-glossary' onClick={handleOpen}>
        Glossary
      </button>
      {renderTooltips}
      <Modal
        handleClose={handleClose}
        open={isOpen}
        title='Select glossary word'
      >
        <div>
          <SingleSelect
            id='students-sort-by'
            label=''
            placeholder=''
            size='small'
            options={glossaryOptions}
            onChange={handleChange}
            value={selectedOption || null}
          />
          <Button
            color='blue'
            size='small'
            variant='outlined'
            id='select-glossary-word'
            onClick={handleSubmitModal}
          >
            Save
          </Button>
        </div>
      </Modal>
    </ButtonContainer>
  )
}

export default AddGlossaryButton

const ButtonContainer = styled.div`
  .__react_component_tooltip {
    text-align: center !important;
    background-color: ${({ theme }) => theme.palette.biege} !important;
    opacity: 1 !important;
    color: ${({ theme }) => theme.palette.textDark} !important;
    padding: 10px;
    border: none !important;
    margin-top: 0px !important;
    box-shadow: ${({ theme }) => theme.shadows.darkShadow} !important;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: -0.1px;

    &::before,
    &::after {
      display: none;
    }
  }
`
