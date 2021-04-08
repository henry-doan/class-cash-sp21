import { Component } from 'react'
import { Container, Divider, Icon, Header, Card, Image, Grid} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const About = () => {
  return(
   
    <Container textAlign="center">
       <Header>About Us</Header>
     <Grid columns='3'>
        <Grid.Column>
          <Card>
            <Image />
            <Card.Content>
              <Header>Harry Dhillon</Header>
            </Card.Content>
            <Card.Description >
            <a style={{color: 'black'}} href="https://github.com"><Icon name='github' size='big' /></a>
            <a href="https://linkedin.com"><Icon name='linkedin' size='big'/></a>
            </Card.Description>
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6--u_acpO_tHG6nFkcGQmFw3aYdUt0Yzz5g&usqp=CAU" />
            <Card.Content>
            <Header>Sean Schmidt</Header>
            </Card.Content>
            <Card.Description>
              <Icon name='github' size='big' /> <a><Icon name='linkedin'  size='big' /></a>
            </Card.Description>
            <Divider hidden />
            <Card.Description>
              This is Discription
            </Card.Description>
            
          </Card>
        </Grid.Column>
        
        <Grid.Column>
          <Card>
            <Image />
            <Card.Content>
              <Header>Tyler Cheney</Header>
            </Card.Content>
            <Card.Description>
              <a style={{color: 'black'}}>
                <Icon name='github' size="big"></Icon>
              </a>
              <a style={{color: 'black'}}>
                <Icon name='linkedin' size="big"></Icon>
              </a>
            </Card.Description>
            <Divider hidden />
            <Card.Description>
              Cool Stuff About Me
            </Card.Description>
            <Divider hidden />
          </Card>
        </Grid.Column>
     </Grid>
    </Container>
  )
}

export default About;