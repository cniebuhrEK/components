import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  themeDarkVariant,
  themeKey,
  eventsNames,
  themeEvents
} from '../../theme'

interface AppLogoProps {
  isUniversity: boolean
}

export const AppLogo = ({ isUniversity }: AppLogoProps) => {
  const [logoUrl, setLogoUrl] = useState('/assets/logo/ExamsLogoLightBg.svg')

  const handleLogoUrl = () => {
    if (isUniversity) {
      localStorage.getItem(themeKey) === themeDarkVariant
        ? setLogoUrl('/assets/logo/KrackUniversityLogoDarkBg.svg')
        : setLogoUrl('/assets/logo/KrackUniversityLogoLightBg.svg')
    } else {
      localStorage.getItem(themeKey) === themeDarkVariant
        ? setLogoUrl('/assets/logo/ExamsLogoDarkBg.svg')
        : setLogoUrl('/assets/logo/ExamsLogoLightBg.svg')
    }
  }

  useEffect(() => {
    themeEvents.on(eventsNames.themeUpdated, handleLogoUrl)
    return () => {
      themeEvents.off(eventsNames.themeUpdated, handleLogoUrl)
    }
  }, [isUniversity])

  return (
    <LogoContainer>
      <img src={logoUrl} alt={isUniversity ? 'KrackU Logo' : 'Logo'} />
    </LogoContainer>
  )
}

const LogoContainer = styled.div`
  display: flex;
  height: 100%;

  img {
    max-width: 157px;
  }
`
