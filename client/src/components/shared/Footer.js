import { Link } from "react-router-dom";
import { Container, Divider, Icon } from "semantic-ui-react";
import {Foot} from '../../styledComponents/SharedStyles';
const Footer = () => (
      
      <Container textAlign='center' className='footer'>
      {/* <Foot> */}
      <Divider />
      <Link to='/About'>About Us</Link>
      <Container class="copyright">Copyright©2021. All rights reserved.</Container>
      
      
      <Divider hidden />
      {/* </Foot> */}
      </Container>
      
)
export default Footer;