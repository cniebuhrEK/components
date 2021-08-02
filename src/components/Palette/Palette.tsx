import React from 'react'
import styled from 'styled-components'
import theme from '../../theme/examTheme'

const Palette = () => (
  <PaletteContainer>
    {Object.entries(theme.palette).map((color, key) => (
      <ColorSwatch key={key} color={color[1]}>
        <span>{color[0]}</span>
      </ColorSwatch>
    ))}
  </PaletteContainer>
)

const PaletteContainer = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  max-width: 800px;
`

const ColorSwatch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: ${({ color }) => color};
  width: 100px;
  height: 100px;
`

export default Palette
