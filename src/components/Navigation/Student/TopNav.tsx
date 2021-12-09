// Navigation/Student/TopNav.tsx - Top navigation component

import React from 'react'
import * as R from 'ramda'
import styled from 'styled-components'
import { Button } from '../../Button'
import { isNotNilOrEmpty } from '../../../utils/ramda'

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
  greeting: string
  menu: string
  showCrackUniversityLogo?: boolean
  links: MenuLink[]
  onMenuOpen?: () => any
}

const StudentTopNavigation = (
  props: StudentTopNavigationProps
): JSX.Element => {
  const { avatar, menu, greeting, links, showCrackUniversityLogo, onMenuOpen } =
    props

  const [open, setOpen] = React.useState<boolean>(false)
  const [linkLevel1, setLinkLevel1] = React.useState('')
  const [linkLevel2, setLinkLevel2] = React.useState('')

  const setLevel1 = value => setLinkLevel1(value)
  const setLevel2 = value => setLinkLevel2(value)

  const resetLevel1 = () => setLinkLevel1('')
  const resetLevel2 = () => setLinkLevel2('')

  const handleMouseLeave = () => {
    setOpen(false)
    resetLevel1()
    resetLevel2()
  }
  const handleMouseEnter = () => {
    setOpen(true)
    onMenuOpen && onMenuOpen()
  }

  const logoUrl: string = showCrackUniversityLogo
    ? '/assets/logo/CrackUniversityLogo.svg'
    : '/assets/logo/LogoDarkBg.svg'

  const generateLevel2Links = links =>
    links.map((link, index) => (
      <NavMenuItem href={link.url} key={`nav-menu-link-level-1-${index}`}>
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
        <NavMenuItem href={link.url}>
          {link.icon && <NavMenuIcon>{link.icon}</NavMenuIcon>}
          <NavMenuLink>{link.label}</NavMenuLink>
        </NavMenuItem>
      )

      return (
        <React.Fragment key={`nav-menu-link-level-1-${index}`}>
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
      <NavMenuItem isHidden={shouldHide} href={link.url}>
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

  return (
    <Container>
      <LogoContainer>
        <img src={logoUrl} alt='logo icon' />
      </LogoContainer>

      <NavRight>
        <UserContainer>
          {avatar && <IconContainer src={avatar} alt='profile icon' />}
          <p>{greeting}</p>
        </UserContainer>

        <Overlay open={open} />
        <MenuContainer open={open} onMouseLeave={handleMouseLeave}>
          <Button onMouseEnter={handleMouseEnter}>{menu}</Button>
          <NavMenu open={open}>{generateLinks}</NavMenu>
        </MenuContainer>
      </NavRight>
    </Container>
  )
}

StudentTopNavigation.defaultProps = {
  avatar: '',
  menu: '',
  greeting: '',
  links: []
}

const Container = styled.div`
  align-items: center;
  background-color: none;
  display: flex;
  height: ${({ theme }) => theme.dimensions.studentTopNavHeight};
  line-height: ${({ theme }) => theme.dimensions.studentTopNavHeight};
  justify-content: space-between;
  width: 100%;
  max-width: 1280px;
  margin: auto;
`

const Overlay = styled.div`
  width: ${({ open }) => (open ? '100%' : '0')};
  height: ${({ open }) => (open ? '100%' : '0')};
  opacity: ${({ open }) => (open ? 1 : 0)};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: ${({ theme }) => theme.palette.overlay};
  filter: blur(2px);
  backdrop-filter: blur(2px);
  transition: opacity 400ms ${({ theme }) => theme.transitions.easing.easeInOut};
  z-index: ${({ theme }) => theme.zIndex.menu - 10};
`

const LogoContainer = styled.div`
  display: flex;
  height: 100%;
  width: ${({ theme }) => theme.dimensions.studentSideNavWidth};
  color: ${({ theme }) => theme.palette.biege};

  img {
    width: 200px;
  }
`

//
// Navigation User
//
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row;
  color: ${({ theme }) => theme.palette.brown01};
  font-size: ${({ theme }) => theme.typography.fontSizeNormal};
  margin-right: 2em;

  p {
    white-space: nowrap;
  }
`

const IconContainer = styled.img`
  border-radius: 100%;
  background: ${({ theme }) => theme.palette.white};
  height: 48px;
  width: 48px;
  justify-content: flex-start;
  margin: 0 16px 0 0;
`

const NavRight = styled.div`
  align-items: center;
  justify-content: space-between;
  display: flex;
  width: auto;
`

//
// Navigation Menu
//

const MenuContainer = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.menu};
`

const NavMenu = styled.div`
  background-color ${({ theme }) => theme.palette.white};
  border-radius: ${({ theme }) => theme.shape.borderRadiusBig};
  box-shadow: 0px 10px 20px #CDC5BB;
  display: ${({ open }) => (open ? 'block' : 'none')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  width: ${({ open }) => (open ? 'auto' : '0')};
  height: ${({ open }) => (open ? 'auto' : '0')};
  min-width: ${({ open }) => (open ? '200px' : '0')};
  position: absolute;
  right: 0;
  top: ${({ theme }) => theme.dimensions.studentTopNavHeight};
  z-index: ${({ theme }) => theme.zIndex.menu};
  transition: opacity 700ms ${({ theme }) =>
    theme.transitions.easing.easeInOut};
  max-width: 210px;
  min-width: 210px;
`

const NavMenuLink = styled.span`
  color: ${({ theme }) => theme.palette.darkblue01};
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
  color: ${({ theme }) => theme.palette.darkblue01};
  border-left: 3px solid transparent;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    border-left: 3px solid ${({ theme }) => theme.palette.orange02};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
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
  color: ${({ theme }) => theme.palette.darkblue01};
  border-left: ${({ isSelected, theme }) =>
    `3px solid ${isSelected ? theme.palette.orange02 : 'transparent'}`};
  box-shadow: ${({ isSelected }) =>
    isSelected ? '0px 4px 4px rgba(0, 0, 0, 0.15)' : 'none'};
  text-decoration: ${({ isSelectedAsLevel1 }) =>
    isSelectedAsLevel1 ? 'underline' : 'none'};
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    border-left: 3px solid ${({ theme }) => theme.palette.orange02};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    cursor: pointer;
  }

  &:hover ${NavMenuLink} {
    font-weight: 600;
  }
`

export default StudentTopNavigation
