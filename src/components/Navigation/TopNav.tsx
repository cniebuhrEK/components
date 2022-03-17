// Navigation/Student/TopNav.tsx - Top navigation component

import React, { useEffect, useState } from 'react'
import * as R from 'ramda'
import styled from 'styled-components'
import { Button } from '../Button'
import { isNotNilOrEmpty } from '../../utils/ramda'
import useOutsideClick from '../../hooks/useOutsideClick'
import {
  themeDarkVariant,
  themeKey,
  eventsNames,
  themeEvents
} from '../../theme'

type PureLink = {
  label: string
  url?: string
}

type NextLevelLink = {
  label: string
  url?: string
  nextLevel?: PureLink[]
}

type MenuLink = {
  label: string
  url?: string
  icon?: JSX.Element
  nextLevel?: NextLevelLink[]
}

interface StudentTopNavigationProps {
  avatar: string
  greeting?: string
  menu: string
  showCrackUniversityLogo?: boolean
  multipleCourse?: boolean
  notification?: string | JSX.Element | JSX.Element[]
  redirectHandler?: (e) => any
  links: MenuLink[]
  navLeftElements?: JSX.Element | string | JSX.Element[] | string[]
  navRightElements?: JSX.Element | string | JSX.Element[] | string[]
  onMenuOpen?: () => any
}

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const StudentTopNavigation = (
  props: StudentTopNavigationProps
): JSX.Element => {
  const {
    avatar,
    menu,
    greeting,
    links,
    showCrackUniversityLogo,
    onMenuOpen,
    navLeftElements,
    navRightElements,
    redirectHandler,
    notification,
    multipleCourse
  } = props

  const [open, setOpen] = React.useState<boolean>(false)
  const [linkLevel1, setLinkLevel1] = React.useState('')
  const [linkLevel2, setLinkLevel2] = React.useState('')
  const [menuPosition, setMenuPosition] = React.useState({ top: 0, left: 0 })
  const hasAdditionalElements = isNotNilOrEmpty(navLeftElements)
  const hasAdditionalRightElements = isNotNilOrEmpty(navRightElements)
  const menuRef = React.useRef(null)
  const staticMenuButtonRef = React.useRef(null)

  const setLevel1 = value => setLinkLevel1(value)
  const setLevel2 = value => setLinkLevel2(value)

  const resetLevel1 = () => setLinkLevel1('')
  const resetLevel2 = () => setLinkLevel2('')

  const saveMenuPosition = () => {
    const element = staticMenuButtonRef

    const dimensions = element.current
      ? // @ts-ignore
        element.current.getBoundingClientRect()
      : { top: 0, left: 0 }

    setMenuPosition({ top: dimensions.top, left: dimensions.left })
  }

  const handleMouseLeave = () => {
    saveMenuPosition()
    setOpen(false)
    resetLevel1()
    resetLevel2()
  }
  const handleMouseEnter = () => {
    saveMenuPosition()
    setOpen(true)
    onMenuOpen && onMenuOpen()
  }

  const getExamsLogo = () =>
    localStorage.getItem(themeKey) === themeDarkVariant
      ? '/assets/logo/ExamsLogoLightBg.svg'
      : '/assets/logo/ExamsLogoDarkBg.svg'

  const getKrackULogo = () =>
    localStorage.getItem(themeKey) === themeDarkVariant
      ? '/assets/logo/KrackUniversityLogoDarkBg.svg'
      : '/assets/logo/KrackUniversityLogoLightBg.svg'

  const getLogo = () =>
    showCrackUniversityLogo ? getKrackULogo() : getExamsLogo()

  const [logoUrl, setLogoUrl] = useState(getLogo())

  const saveLogoUrl = () => setLogoUrl(getLogo())

  useEffect(() => {
    themeEvents.on(eventsNames.themeUpdated, saveLogoUrl)
    return () => {
      themeEvents.off(eventsNames.themeUpdated, saveLogoUrl)
    }
  }, [showCrackUniversityLogo])

  const redirectByHref = url => {
    window.location.href = url
  }

  const handleRedirect = url => () => {
    redirectHandler ? redirectHandler(url) : redirectByHref(url)
  }

  const generateLevel2Links = links =>
    links.map((link, index) => (
      <NavMenuItem
        onClick={handleRedirect(link.url)}
        key={`nav-menu-link-level-2-${index}-${getRandomIntInclusive(1, 100)}`}
      >
        {link.icon && <NavMenuIcon>{link.icon}</NavMenuIcon>}
        <NavMenuLink>{link.label}</NavMenuLink>
      </NavMenuItem>
    ))

  const handleLevel2 = value => e => {
    e.preventDefault()
    linkLevel2 === value ? resetLevel2() : setLevel2(value)
  }

  const generateLevel1Links = links =>
    links.map((link, index) => {
      const nextLevelLinks = R.propOr([], 'nextLevel')(link)
      const has2level = isNotNilOrEmpty(nextLevelLinks)
      const isOtherLeveledLinkSelected =
        linkLevel2 !== link.label && isNotNilOrEmpty(linkLevel2)
      const isSelected = linkLevel2 === link.label

      const Level1Link = has2level ? (
        <NavStaticMenuItem
          onClick={handleLevel2(link.label)}
          isHidden={isOtherLeveledLinkSelected}
          isSelectedAsLevel1={isSelected}
        >
          {link.icon && <NavMenuIcon>{link.icon}</NavMenuIcon>}
          <NavMenuLink>{link.label}</NavMenuLink>
        </NavStaticMenuItem>
      ) : (
        <NavMenuItem onClick={handleRedirect(link.url)}>
          {link.icon && <NavMenuIcon>{link.icon}</NavMenuIcon>}
          <NavMenuLink>{link.label}</NavMenuLink>
        </NavMenuItem>
      )

      return (
        <React.Fragment
          key={`nav-menu-link-level-1-${index}-${getRandomIntInclusive(
            1,
            100
          )}`}
        >
          {Level1Link}
          {link.label === linkLevel2 && generateLevel2Links(nextLevelLinks)}
        </React.Fragment>
      )
    })

  const handleLevel1 = value => e => {
    e.preventDefault()
    linkLevel1 === value ? resetLevel1() : setLevel1(value)
  }

  const generateLinks = links.map((link: MenuLink, index) => {
    const nextLevelLinks = R.propOr([], 'nextLevel')(link)
    const has1level = isNotNilOrEmpty(nextLevelLinks)

    const openedLeveledLinkIndex = R.findIndex(R.propEq('label', linkLevel1))(
      links
    )
    const isSelected = index === openedLeveledLinkIndex

    const shouldHide =
      openedLeveledLinkIndex >= 0 && index > openedLeveledLinkIndex

    const MainLink = has1level ? (
      <NavStaticMenuItem
        isHidden={shouldHide}
        onClick={handleLevel1(link.label)}
        isSelected={isSelected}
      >
        {link.icon && <NavMenuIcon>{link.icon}</NavMenuIcon>}
        <NavMenuLink>{link.label}</NavMenuLink>
      </NavStaticMenuItem>
    ) : (
      <NavMenuItem isHidden={shouldHide} onClick={handleRedirect(link.url)}>
        {link.icon && <NavMenuIcon>{link.icon}</NavMenuIcon>}
        <NavMenuLink>{link.label}</NavMenuLink>
      </NavMenuItem>
    )

    return (
      <React.Fragment key={`nav-menu-link-${index}`}>
        {MainLink}
        {linkLevel1 === link.label && generateLevel1Links(nextLevelLinks)}
      </React.Fragment>
    )
  })

  const hasNotification = isNotNilOrEmpty(notification)

  useOutsideClick(menuRef, handleMouseLeave)

  // MenuButtonStatic & MenuButtonOpened - It is an idea to pull
  // menu items as high as possible so that their z-index is not
  // overwritten by other items on the platform that have lower nesting

  const MenuButtonStatic = (
    <MenuContainerStatic
      ref={staticMenuButtonRef}
      onMouseEnter={handleMouseEnter}
    >
      <Button>{menu}</Button>
    </MenuContainerStatic>
  )

  const MenuButtonOpened = (
    <React.Fragment>
      <Overlay open={open} />
      <MenuContainerOpen
        open={open}
        ref={menuRef}
        onMouseLeave={handleMouseLeave}
        menuPosition={menuPosition}
      >
        <Button>{menu}</Button>
        <NavMenu open={open}>{generateLinks}</NavMenu>
      </MenuContainerOpen>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      {MenuButtonOpened}
      <ContainerOuter open={open} withNotification={hasNotification}>
        <div className='nav-notification'>{notification}</div>
        <Container>
          <LogoWrapper>
            <LogoContainer>
              <img src={logoUrl} alt='logo icon' />
            </LogoContainer>

            {hasAdditionalElements && (
              <AdditionalElementsContainer>
                {navLeftElements}
              </AdditionalElementsContainer>
            )}
          </LogoWrapper>

          <NavRight alignItems={multipleCourse}>
            <UserContainer>
              {avatar && <IconContainer src={avatar} alt='profile icon' />}
              {greeting && <p>{greeting}</p>}
            </UserContainer>
            {hasAdditionalRightElements && navRightElements}
            {isNotNilOrEmpty(links) && MenuButtonStatic}
          </NavRight>
        </Container>
      </ContainerOuter>
    </React.Fragment>
  )
}

StudentTopNavigation.defaultProps = {
  avatar: '',
  menu: '',
  greeting: '',
  links: []
}

const ContainerOuter = styled.div`
  flex-direction: column;
  display: flex;
  height: ${({ theme }) => theme.dimensions.studentTopNavHeight};
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.topNav.border};
  background: ${({ theme }) => theme.colors.topNav.background};
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.navigation};

  .nav-notification {
    flex: none;
    display: ${({ theme }) => (theme.withNotification ? 'flex' : 'none')};
    align-items: center;
    justify-content: center;
    height: ${({ theme }) => theme.dimensions.topNotificationHeight};
    width: 100%;
    background-color: ${({ theme }) => theme.colors.topNav.freeTrial};
  }
`

const Container = styled.div`
  align-items: center;
  display: flex;
  height: ${({ theme }) => theme.dimensions.studentTopNavHeight};
  justify-content: space-between;
  max-width: 1280px;
  margin: auto;
  width: 100%;
  padding: 0 10px;
`

const Overlay = styled.div`
  width: ${({ open }) => (open ? '100%' : '0')};
  height: ${({ open }) => (open ? '100%' : '0')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.topNav.overlay};
  filter: blur(2px);
  backdrop-filter: blur(2px);
  transition: opacity 400ms ${({ theme }) => theme.transitions.easing.easeInOut};
  z-index: ${({ theme }) => theme.zIndex.mainOverlay};
`

const LogoWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`

const LogoContainer = styled.div`
  display: flex;
  height: 100%;

  img {
    max-width: 157px;
  }
`

const AdditionalElementsContainer = styled.div`
  line-height: 14px;
  display: flex;
  align-items: center;
  gap: 18px;
`

//
// Navigation User
//
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row;
  font-size: ${({ theme }) => theme.typography.fontSizeNormal};
  font-size: 14px;
  letter-spacing: -0.1px;
  padding: 5px 10px;

  p {
    white-space: nowrap;
  }
`

const IconContainer = styled.img`
  border-radius: 100%;
  height: 48px;
  width: 48px;
  justify-content: flex-start;
  margin: 0 16px 0 0;
`

const NavRight = styled.div`
  align-items: ${({ alignItems }) => (alignItems ? 'flex-start' : 'center')};
  justify-content: space-between;
  display: flex;
  width: auto;
  gap: 16px;
`

//
// Navigation Menu
//

const MenuContainerOpen = styled.div`
  position: fixed;
  display: ${({ open }) => (open ? 'block' : 'none')};
  top: ${({ menuPosition }) => menuPosition.top}px;
  left: ${({ menuPosition }) => menuPosition.left}px;
  z-index: ${({ theme }) => theme.zIndex.mainMenu};

  button {
    min-width: 121px;
    max-width: 121px;
    height: 40px;
  }
`

const MenuContainerStatic = styled.div`
  button {
    min-width: 121px;
    max-width: 121px;
    height: 40px;
  }
`

const NavMenu = styled.div`
  background-color ${({ theme }) => theme.colors.mainMenu.background};
  border-radius: ${({ theme }) => theme.shape.borderRadiusBig};
  box-shadow: ${({ theme }) => theme.shadows.mainShadow};
  display: ${({ open }) => (open ? 'block' : 'none')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  width: ${({ open }) => (open ? 'auto' : '0')};
  height: ${({ open }) => (open ? 'auto' : '0')};
  min-width: ${({ open }) => (open ? '210px' : '0')};
  position: absolute;
  right: 0;
  top: 100%;
  z-index: ${({ theme }) => theme.zIndex.mainMenu};
  transition: opacity 700ms ${({ theme }) =>
    theme.transitions.easing.easeInOut};
  max-width: 210px;
`

const NavMenuLink = styled.span`
  color: ${({ theme }) => theme.colors.mainMenu.font};
  font-size: ${({ theme }) => theme.typography.fontSizeNormal};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const NavMenuIcon = styled.div`
  margin: 0 8px 0 0;
`

const NavMenuItem = styled.a`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'flex')};
  align-items: center;
  justify-content: flex-start;
  line-height: normal;
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.mainMenu.font};
  border-left: 3px solid transparent;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    border-left: 3px solid ${({ theme }) => theme.colors.mainMenu.borderActive};
    box-shadow: ${props => props.theme.shadows.mainShadow};
    cursor: pointer;
  }

  &:hover ${NavMenuLink} {
    font-weight: 600;
  }
`

const NavStaticMenuItem = styled.div`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'flex')};
  align-items: center;
  justify-content: flex-start;
  line-height: normal;
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.mainMenu.font};
  border-left: ${({ isSelected, theme }) =>
    `3px solid ${
      isSelected ? theme.colors.mainMenu.borderActive : 'transparent'
    }`};
  box-shadow: ${({ isSelected }) =>
    isSelected ? '0px 4px 4px rgba(0, 0, 0, 0.15)' : 'none'};
  text-decoration: ${({ isSelectedAsLevel1 }) =>
    isSelectedAsLevel1 ? 'underline' : 'none'};
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    border-left: 3px solid ${({ theme }) => theme.colors.mainMenu.borderActive};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }

  &:hover ${NavMenuLink} {
    font-weight: 600;
  }
`

export default StudentTopNavigation
