import { Container, Header, Divider, List, Button } from "semantic-ui-react";
import { Link } from 'react-router-dom';

const Home = () => (
  <>
    <Divider hidden />
    <Container textAlign='center'>
      <Header>Welcome to ClassCash</Header>
      To get started, you need to be a part of a Classroom. You can join a Classroom in multiple ways.
      <List>
        <List.Item>1. Ask an owner of an existing Classroom to add you by your email.</List.Item>
        <List.Item>2. Start your own Classroom.</List.Item>
      </List>
      <Button size='large' style={{ backgroundColor: '#1CB993' }} >
        <Link to="/CreateClassroom" style={{color: 'white'}} >
          Login to an existing account
        </Link>  
      </Button> 
    </Container>
  </>
)
export default Home;