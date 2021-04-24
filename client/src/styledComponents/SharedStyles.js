import styled from 'styled-components'
import { Form, Image, Button, Dropdown, Grid } from 'semantic-ui-react'

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
  font-weight: lighter !important;
  font-size: 18px !important;
  padding: 8px 16px !important;
  height: 41px !important;
`

export const GreyButton = styled(Button)`
  background: #F5F5F5 !important;
  color: #2A3532 !important;
  font: 'Open sans' !important;
  font-weight: lighter !important;
  font-size: 18px !important;
  padding: 8px 16px !important;
  position: absolute !important;
  height: 41px !important;
`

export const Bar = styled(Dropdown)`
  color: #ffffff !important;
  font: 'Open sans' !important;
  background: #1CB993 !important;
  height: 41px !important;
  font-weight: lighter !important;
  font-size: 18px !important;
  padding: 10px 16px 8px 16px !important;
  margin-bottom: 3px !important;
`

export const Vutton = styled.button`
color: #ffffff !important;
font: 'Open sans' !important;
background: #1CB993 !important;
 position: inline-block !important
`

export const Divvv = styled.div`

float: left;
position: absolute !imortant;
`


export const Divv =styled.div`
right: 0 !important;

position: absolute !important;

`

export const DropdownGrid = styled(Grid)`
  min-width: 90vw !important;
  height: 251px !important;
`
export const HoverButton = styled(Button)`
background: white !important;
&:hover {
  background: #1CB993 !important ;}
`