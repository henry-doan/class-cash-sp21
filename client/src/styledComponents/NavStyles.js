import styled from 'styled-components'
import { Image, Menu, Card } from 'semantic-ui-react'

export const NavLogo = styled(Image)`
height: 30px;
margin-top: 18px;
padding-left: 100px
`

export const NavMenuItem = styled(Menu.Item)`
  font: 'Open sans' !important;
  font-style: normal !important;
  font-weight: normal !important;
  font-size: 1.125rem !important;
  margin: 8px !important;
  padding-bottom: 18px !important;
`

export const NavCard = styled(Card)`
  border-radius: 16px !important;
  height: 150px;
`

export const NavH1 = styled.h1`
  font: 'Open sans' !important;
  font-style: normal !important;
  font-weight: bold !important;
`