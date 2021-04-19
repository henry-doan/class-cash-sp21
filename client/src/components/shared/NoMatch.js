import { Link } from 'react-router-dom';
import Lost from '../images/Lost.gif';
import { Image, Button, Container } from 'semantic-ui-react'
const NoMatch = () => (
  
  <div>
    <h1> What...Where am I...? </h1>

    <Image style={{width: '25%', height: "auto"}} src={Lost} />
   
   <h2>Is this a 404 error?....</h2>
    <h3>Maybe I should click this "Home" button...</h3>
    <h4>I don't know... it's red... usually red means bad...</h4>
    <br />
    JUST CLICK IT ---
    <Button style={{backgroundColor: "red"}}>
    <Link to='/' style={{color: 'white'}}>Home</Link>
    </Button>
    </div>
)
export default NoMatch;