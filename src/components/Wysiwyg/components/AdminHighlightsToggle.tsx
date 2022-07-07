import React from 'react'
import { ToggleSwitch } from '../../ToggleSwitch'
import styled from 'styled-components'

export const AdminHighlightsToggle = ({
  toggleAdminHighlights
}): JSX.Element => {
  const handleToggle = () => toggleAdminHighlights()

  return (
    <ToggleContainer>
      <ToggleSwitch
        id='switch-admin-highlights'
        name='switch-admin-highlights'
        onChange={handleToggle}
        label='Show highlights'
      />
    </ToggleContainer>
  )
}

export default AdminHighlightsToggle

const ToggleContainer = styled.div`
  position: relative;
  display: inline-block;
  bottom: 7px;

  * {
    font-size: 11px;
  }
`
