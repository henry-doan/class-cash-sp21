import styled from 'styled-components'
import { Form, Image, Button, Dropdown } from 'semantic-ui-react'

export const SharedForm = styled(Form)`
  width: 50%;
  font-size: 16px !important;
`

export const LeftAlignDiv = styled.div`
  text-align: left;
  margin-bottom: 10px
`

export const MainLogo = styled(Image)`
  width: 256.7px;
  height: 51px;
`

export const GreenButton = styled(Button)`
  color: #ffffff !important; 
  background: #1CB993 !important;
  font: 'Open sans' !important;
  font-weight: normal !important;
  font-size: 18px !important;
  padding: 8px 16px !important;
  padding: 8px 16px !important;
  height: 41px !important;
`

export const GreyButton = styled(Button)`
  bacground: #F5F5F5 !important;
  color: #2A3532 !important;
  font: 'Open sans' !important;
  font-weight: normal !important;
  font-size: 18px !important;
  padding: 8px 16px !important;
  position: absolute !important;
  height: 41px !important;
`

export const Bar = styled(Dropdown)`
color: #ffffff !important;
font: 'Open sans' !important;
background: #1CB993 !important;


`