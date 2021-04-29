import { Link } from "react-router-dom";
import { Container, Divider, Icon } from "semantic-ui-react";
import {Foot} from '../../styledComponents/SharedStyles';
const Footer = () => (
      <Foot>
      <Container textAlign='center' className='footer'>
      
      <Divider />
      <Link to='/About'>About Us</Link>
      <Container class="copyright">Copyright©2021. All rights reserved.</Container>
      
      
      <Divider hidden />
      </Container>
      </Foot>
)
export default Footer;