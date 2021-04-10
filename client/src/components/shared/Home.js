import { Container, Header, Divider, List, Button } from "semantic-ui-react";

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
      <Button size='large' style={{color: '#ffffff', backgroundColor: '#1CB993' }} >Start a new Classroom</Button> 
    </Container>
  </>
)
export default Home;