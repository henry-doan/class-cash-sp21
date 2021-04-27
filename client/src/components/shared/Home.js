import { Container, Header, Divider, List, Button, Grid } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { HomeLogo, LeftAlignDiv, GreenButton } from '../../styledComponents/SharedStyles';
import Logo from '../images/Logo.png'

const Home = () => (
  <>
    <Grid centered>
      <Container>
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Divider hidden />
        <Grid centered>
          <HomeLogo src={Logo}/>
        </Grid>
        <Grid centered>
          <LeftAlignDiv>
            <Divider hidden />
            To get started, you need to be a part of a Classroom. You can join a Classroom in multiple ways.
            <List style={{fontSize: '1rem'}}>
              <List.Item>1. Ask an owner of an existing Classroom to add you by your email.</List.Item>
              <List.Item>2. Start your own Classroom.</List.Item>
            </List>
          </LeftAlignDiv>
        </Grid>
        <Divider hidden />
        <Link to="/CreateClassroom">
          <GreenButton style={{width: '200px'}}>
            Create a new Classroom
          </GreenButton> 
        </Link> 
        <Link to="/ViewClassrooms">
          <GreenButton style={{width: '200px'}}>
            View all Classrooms
          </GreenButton> 
        </Link> 
      </Container>
    </Grid>
  </>
)
export default Home;