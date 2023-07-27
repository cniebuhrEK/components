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
import { Tooltip } from '../Tooltip'
import { ArrowDownIcon, ArrowRightIcon, BookMarkIcon } from '../../icons'

type PureLink = {
  label: string
  url?: string
  isInactive?: boolean
  tooltip?: string | JSX.Element
  bookmark?: string | JSX.Element
  bookmarkOnClick?: () => {}
}

type NextLevelLink = {
  label: string
  url?: string
  isInactive?: boolean
  tooltip?: string | JSX.Element
  nextLevel?: PureLink[]
  onClick?: () => void
}

type MenuLink = {
  label: string
  url?: string
  onClick?: () => void
  isInactive?: boolean
  tooltip?: string | JSX.Element
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

  const [logoUrl, setLogoUrl] = useState('/assets/logo/ExamsLogoLightBg.svg')

  const saveLogoUrl2 = () => {
    if (showCrackUniversityLogo) {
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
    saveLogoUrl2()
    themeEvents.on(eventsNames.themeUpdated, saveLogoUrl2)
    return () => {
      themeEvents.off(eventsNames.themeUpdated, saveLogoUrl2)
    }
  }, [showCrackUniversityLogo])

  const redirectByHref = url => {
    window.location.href = url
  }

  const handleRedirect = url => () => {
    handleMouseLeave()
    redirectHandler ? redirectHandler(url) : redirectByHref(url)
  }

  const handleOnclick = callback => () => {
    handleMouseLeave()
    callback()
  }

  const generateLevel2Links = links =>
    links.map((link, index) => {
      const isInactive = R.propOr(false, 'isInactive', link)
      const tooltip = R.propOr('', 'tooltip', link)
      const hasTooltip = isNotNilOrEmpty(tooltip)
      const bookmark = R.propOr('', 'bookmark', link)
      const bookmarkOnClick = R.propOr(() => {}, 'bookmarkOnClick', link)
      const hasBookmark = isNotNilOrEmpty(bookmark)

      const Level2Link = (
        <LowestLevelLink
          isInactive={isInactive}
          key={`nav-menu-link-level-2-${index}-${getRandomIntInclusive(
            1,
            100
          )}`}
        >
          {link.icon && <NavMenuIcon>{link.icon}</NavMenuIcon>}

          <NavMenuLink
            onClick={isInactive ? () => {} : handleRedirect(link.url)}
          >
            {link.label}
          </NavMenuLink>

          {hasBookmark && (
            <BookmarkLink onClick={isInactive ? () => {} : bookmarkOnClick}>
              Go to
              <BookMarkIcon />
            </BookmarkLink>
          )}
        </LowestLevelLink>
      )

      const renderLink = hasTooltip ? (
        <TooltipContainer>
          <Tooltip
            id={`nav-menu-link-level-2-tooltip-${index}-${getRandomIntInclusive(
              1,
              100
            )}`}
            tooltipContent={tooltip}
          >
            {Level2Link}
          </Tooltip>
        </TooltipContainer>
      ) : (
        Level2Link
      )

      return renderLink
    })

  const handleLevel2 = value => e => {
    e.preventDefault()
    linkLevel2 === value ? resetLevel2() : setLevel2(value)
  }

  const generateLevel1Links = links =>
    links.map((link, index) => {
      const nextLevelLinks = R.propOr([], 'nextLevel')(link)
      const has2level = isNotNilOrEmpty(nextLevelLinks)
      const isSelected = linkLevel2 === link.label
      const isInactive = R.propOr(false, 'isInactive', link)
      const tooltip = R.propOr('', 'tooltip', link)
      const hasTooltip = isNotNilOrEmpty(tooltip)
      const onClick = R.propOr('', 'nextLevel')(link)
      const hasOnClick = isNotNilOrEmpty(onClick)

      const Level1Link = has2level ? (
        <NavStaticMenuItem
          isInactive={isInactive}
          onMouseEnter={isInactive ? () => {} : handleLevel2(link.label)}
          isSelectedAsLevel1={isSelected}
          state={{ backgroundLocation: location }}
        >
          <LabelWrapper>
            {link.icon && <NavMenuIcon>{link.icon}</NavMenuIcon>}
            <NavMenuLink>{link.label}</NavMenuLink>
          </LabelWrapper>
          <ArrowRightIcon className='right-icon' />
          <Level2LinksContainer>
            {link.label === linkLevel2 && generateLevel2Links(nextLevelLinks)}
          </Level2LinksContainer>
        </NavStaticMenuItem>
      ) : (
        <NavMenuItem
          isInactive={isInactive}
          onClick={
            hasOnClick
              ? onClick
              : isInactive
              ? () => {}
              : handleRedirect(link.url)
          }
        >
          {link.icon && <NavMenuIcon>{link.icon}</NavMenuIcon>}
          <NavMenuLink>{link.label}</NavMenuLink>
        </NavMenuItem>
      )

      const renderLink = hasTooltip ? (
        <TooltipContainer>
          <Tooltip
            tooltipContent={tooltip}
            id={`nav-menu-link-level-1-tooltip-${index}-${getRandomIntInclusive(
              1,
              100
            )}`}
          >
            {Level1Link}
          </Tooltip>
        </TooltipContainer>
      ) : (
        Level1Link
      )

      return (
        <React.Fragment
          key={`nav-menu-link-level-1-${index}-${getRandomIntInclusive(
            1,
            100
          )}`}
        >
          {renderLink}
        </React.Fragment>
      )
    })

  const handleLevel1 = value => e => {
    e.preventDefault()
    linkLevel1 === value ? resetLevel1() : setLevel1(value)
  }

  const generateLinks = links.map((link: MenuLink, index) => {
    const nextLevelLinks = R.propOr([], 'nextLevel')(link)
    const tooltip = R.propOr('', 'tooltip')(link)
    const hasTooltip = isNotNilOrEmpty(tooltip)
    const has1level = isNotNilOrEmpty(nextLevelLinks)

    const openedLeveledLinkIndex = R.findIndex(R.propEq('label', linkLevel1))(
      links
    )
    const isSelected = index === openedLeveledLinkIndex

    const MainLink = has1level ? (
      <NavStaticMenuItem
        onClick={handleLevel1(link.label)}
        isSelected={isSelected}
      >
        <LabelWrapper>
          {link.icon && <NavMenuIcon>{link.icon}</NavMenuIcon>}
          <NavMenuLink>{link.label}</NavMenuLink>
        </LabelWrapper>
        <ArrowDownIcon className='dropdown-icon' />
      </NavStaticMenuItem>
    ) : (
      <NavMenuItem
        onClick={
          R.has('onClick', link)
            ? handleOnclick(link.onClick)
            : handleRedirect(link.url)
        }
      >
        <LabelWrapper>
          {link.icon && <NavMenuIcon>{link.icon}</NavMenuIcon>}
          <NavMenuLink>{link.label}</NavMenuLink>
        </LabelWrapper>
      </NavMenuItem>
    )

    const renderLink = hasTooltip ? (
      <TooltipContainer id={`nav-menu-xx-link-tooltip-${index}`}>
        <Tooltip tooltipContent={tooltip} id={`nav-menu-link-tooltip-${index}`}>
          {MainLink}
        </Tooltip>
      </TooltipContainer>
    ) : (
      MainLink
    )

    return (
      <React.Fragment key={`nav-menu-link-${index}`}>
        {renderLink}
        {linkLevel1 === link.label && (
          <Level1LinksContainer>
            {generateLevel1Links(nextLevelLinks)}
          </Level1LinksContainer>
        )}
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

  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

  return (
    <React.Fragment>
      {MenuButtonOpened}
      <ContainerOuter open={open} withNotification={hasNotification}>
        <div className='nav-notification'>{notification}</div>
        <Container isSafari={isSafari}>
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
  height: ${({ theme, isSafari }) =>
    isSafari
      ? `calc(${theme.dimensions.studentTopNavHeight} -
${theme.dimensions.topNotificationHeight})`
      : theme.dimensions.studentTopNavHeight};
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
  gap: 16px;
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
  background: ${({ theme }) => theme.colors.mainMenu.background};
  border-radius: ${({ theme }) => theme.shape.borderRadiusBig};
  box-shadow: ${({ theme }) => theme.colors.mainMenu.mainShadow};
  display: ${({ open }) => (open ? 'block' : 'none')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  width: ${({ open }) => (open ? 'auto' : '0')};
  height: ${({ open }) => (open ? 'auto' : '0')};
  min-width: ${({ open }) => (open ? '210px' : '0')};
  position: absolute;
  right: 0;
  top: 100%;
  z-index: ${({ theme }) => theme.zIndex.mainMenu};
  transition: opacity 700ms ${({ theme }) => theme.transitions.easing.easeInOut};
  max-width: 235px;
  min-width: 235px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const NavMenuLink = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  font-size: 14px;
  line-height: 36px;
`

const NavMenuIcon = styled.div`
  font-size: 17px;
  line-height: 36px;
  display: flex;
  align-items: center;
`

const NavMenuItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  padding: 0 16px;
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.mainMenu.backgroundSelected : 'none'};
  color: ${({ theme, isInactive, isSelected }) => {
    switch (true) {
      case isInactive:
        return theme.colors.main.grey600
      case isSelected:
        return theme.colors.mainMenu.fontSelected
      default:
        return theme.colors.mainMenu.font
    }
  }} !important;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius: 4px;

  &:hover {
    background: ${({ theme, isSelected, isInactive }) => {
      switch (true) {
        case isSelected:
          return theme.colors.mainMenu.backgroundSelected
        case isInactive:
          return 'none'
        default:
          return theme.colors.mainMenu.backgroundActive
      }
    }};
    cursor: ${({ isInactive }) => (isInactive ? 'not-allowed' : 'pointer')};
  }

  &:hover ${NavMenuLink} {
    color: ${({ theme, isInactive, isSelected }) => {
      switch (true) {
        case isInactive:
          return theme.colors.main.grey600
        case isSelected:
          return theme.colors.mainMenu.fontSelected
        default:
          return theme.colors.mainMenu.fontActive
      }
    }};
  }

  &:hover ${NavMenuIcon} {
    color: ${({ theme, isInactive, isSelected }) => {
      switch (true) {
        case isInactive:
          return theme.colors.main.grey600
        case isSelected:
          return theme.colors.mainMenu.fontSelected
        default:
          return theme.colors.mainMenu.fontActive
      }
    }};
  }

  &:hover svg {
    color: ${({ theme, isInactive, isSelected }) => {
      switch (true) {
        case isInactive:
          return theme.colors.main.grey600
        case isSelected:
          return theme.colors.mainMenu.fontSelected
        default:
          return theme.colors.mainMenu.fontActive
      }
    }};
  }
`

const LabelWrapper = styled.div`
  display: flex;
  gap: 16px;
`

const NavStaticMenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 36px;
  padding: 0 16px;
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.mainMenu.backgroundSelected : 'none'};
  color: ${({ theme, isInactive, isSelected }) => {
    switch (true) {
      case isInactive:
        return theme.colors.main.grey600
      case isSelected:
        return theme.colors.mainMenu.fontSelected
      default:
        return theme.colors.mainMenu.font
    }
  }} !important;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius: 4px;
  opacity: ${({ isInactive }) => (isInactive ? '0.3' : 1)};

  &:hover {
    background: ${({ theme, isSelected, isInactive }) => {
      switch (true) {
        case isSelected:
          return theme.colors.mainMenu.backgroundSelected
        case isInactive:
          return 'none'
        default:
          return theme.colors.mainMenu.backgroundActive
      }
    }};
    cursor: ${({ isInactive }) => (isInactive ? 'not-allowed' : 'pointer')};
  }

  &:hover ${NavMenuLink} {
    color: ${({ theme, isInactive, isSelected }) => {
      switch (true) {
        case isInactive:
          return theme.colors.main.grey600
        case isSelected:
          return theme.colors.mainMenu.fontSelected
        default:
          return theme.colors.mainMenu.fontActive
      }
    }};
  }

  &:hover ${NavMenuIcon} {
    color: ${({ theme, isInactive, isSelected }) => {
      switch (true) {
        case isInactive:
          return theme.colors.main.grey600
        case isSelected:
          return theme.colors.mainMenu.fontSelected
        default:
          return theme.colors.mainMenu.fontActive
      }
    }} !important;
  }

  &:hover svg {
    color: ${({ theme, isInactive, isSelected }) => {
      switch (true) {
        case isInactive:
          return theme.colors.main.grey600
        case isSelected:
          return theme.colors.mainMenu.fontSelected
        default:
          return theme.colors.mainMenu.fontActive
      }
    }};
  }

  .dropdown-icon {
    transform: ${({ isSelected }) => (isSelected ? 'rotate(180deg)' : 'none')};
    transition: transform 200ms
      ${({ theme }) => theme.transitions.easing.easeInOut};
  }
`

const TooltipContainer = styled.div`
  display: ${({ isHidden }) => (isHidden ? 'none' : 'flex')};
  align-items: center;
  justify-content: flex-start;
  line-height: normal;

  & > div,
  & > div > div {
    width: 100%;
  }

  .__react_component_tooltip {
    max-width: 230px;
  }
`

const Level1LinksContainer = styled.div`
  margin-top: -8px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.mainMenu.backgroundActive};
  border-radius: 4px;

  ${NavStaticMenuItem}, ${NavMenuItem} {
    position: relative;
    overflow: visible;
    background: ${({ theme }) => theme.colors.mainMenu.backgroundActive};

    &:hover {
      ${NavStaticMenuItem}, ${NavMenuItem} {
        color: ${({ theme }) => theme.colors.mainMenu.font} !important;
      }
    }
  }
`

const Level2LinksContainer = styled.div`
  background: ${({ theme }) => theme.colors.mainMenu.backgroundActive};
  border-radius: 4px;
  position: absolute;
  right: 100%;
  top: 0;
  box-shadow: ${({ theme }) => theme.colors.mainMenu.secondShadow};
  min-width: 235px;
  z-index: 3000;
`

const LowestLevelLink = styled(NavMenuItem)`
  opacity: ${({ isInactive }) => (isInactive ? '0.3' : 1)};

  ${NavMenuLink} {
    color: ${({ theme }) => theme.colors.mainMenu.font} !important;
  }

  ${NavMenuLink}:hover {
    color: ${({ theme, isInactive, isSelected }) => {
      switch (true) {
        case isInactive:
          return theme.colors.main.grey600
        case isSelected:
          return theme.colors.mainMenu.fontSelected
        default:
          return theme.colors.mainMenu.fontActive
      }
    }} !important;
  }
`

const BookmarkLink = styled.div`
  text-decoration: underline;
  display: flex;
  align-items: center;
  margin-left: 6px;

  svg {
    margin-left: 4px;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.main.error500} !important;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.main.primary500} !important;

    svg {
      color: ${({ theme }) => theme.colors.main.error500} !important;
    }
  }
`

export default StudentTopNavigation
