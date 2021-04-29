import styled from 'styled-components'
import { Form, Image, Button, Dropdown, Grid, Header } from 'semantic-ui-react'

export const SharedForm = styled(Form)`
  width: 50%;
  font-size: 1rem !important;
`

export const LeftAlignDiv = styled.div`
  text-align: left;
  margin-bottom: 10px;
`

export const MainLogo = styled(Image)`
  width: 256.7px;
`

export const HomeLogo = styled(Image)`
  width: 216.43px;
`

export const GreenButton = styled(Button)`
  color: #ffffff !important; 
  background: #1CB993 !important;
  font: 'Open sans' !important;
  font-weight: lighter !important;
  font-size: 1.125rem !important;
  padding: 8px 16px !important;
  height: 41px !important;
`

export const GreyButton = styled(Button)`
  background: #F5F5F5 !important;
  color: #2A3532 !important;
  font: 'Open sans' !important;
  font-weight: lighter !important;
  font-size: 1.125rem !important;
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
  font-size: 1.125rem !important;
  padding: 10px 0px 10px 16px !important;
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
  padding-left: 50px !important;
`
export const HoverButton = styled(Button)`
border-radius: 16px !important;
background: white !important;
&:hover {
  background: #1CB993 !important ;}
`

export const MyHeader = styled(Header)`
  font: 'Open sans' !important;
  font-style: normal !important;
  font-weight: bold !important;
  font-size: 1.5rem !important;
`

export const MyPoints2 = styled.h1`
  font-style: normal !important;
  font-weight: bold !important;
  font-size: 2.25rem !important;
  line-height: 1rem !important;
`

export const Foot = styled.div`
position:absolute;
left:0;
bottom:0;
right:0;
`