import { Container, Divider, Icon } from "semantic-ui-react";

const Footer = () => (
      <Container textAlign='center' className='footer'>
        <Divider />
            <Icon size='big'name='facebook official'/>
            <Icon size='big'name='twitter'/>
            <Icon size='big'name='youtube'/>
            <Divider hidden />
            <Container class="copyright">Copyright©2021. All rights reserved.</Container>
            <Divider hidden />
      </Container>
)
export default Footer;