import React from 'react'
import styled from 'styled-components'
import palette from '../../theme/colors'

const Palette = () => (
  <PaletteContainer>
    {Object.entries(palette).map((color, key) => (
      <ColorSwatch key={key} color={color[1]}>
        <span>{color[0]}</span>
      </ColorSwatch>
    ))}
  </PaletteContainer>
)

const PaletteContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-wrap: wrap;
  max-width: 800px;
`

const ColorSwatch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #c5c6c8;
  background: ${({ color }) => color};
  width: 100px;
  height: 100px;
`

export default Palette
