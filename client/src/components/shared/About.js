import Footer from './Footer';
import { Container, Divider, Icon, Header, Card, Image, Grid} from 'semantic-ui-react';
import Harry from '../images/Harry.png';
import Tyler from '../images/Tyler.png';
import Sean from '../images/Sean.jpg';
const About = () => {
  return(
   <>
    <Container textAlign="center">
       <Header>About Us</Header>
     <Grid columns='3'>
        <Grid.Column>
          <Card>
            <Image src={Harry} />
            <Card.Content>
              <Header>Harry Dhillon</Header>
            </Card.Content>
            <Card.Description >
            <a style={{color: 'black'}} href="https://github.com"><Icon name='github' size='big' /></a>
            <a href="https://linkedin.com"><Icon name='linkedin' size='big'/></a>
            </Card.Description>
            <Divider hidden />
            <Card.Description>
              I do a bit of everything! I'm a software engineer, a presentation wizard, a MMA fighter and a lifetime student.
            </Card.Description>
            <Divider hidden />
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card>
            <Image src={Sean} />
            <Card.Content>
            <Header>Sean Schmidt</Header>
            </Card.Content>
            <Card.Description>
              <a style={{color: 'black'}} href='https://github.com/schmidtsean'>
              <Icon name='github' size='big' /> 
              </a>
              <a href='https://www.linkedin.com/in/sean-schmidt-737a7420b/'>
                <Icon name='linkedin'  size='big' /></a>
            </Card.Description>
            <Divider hidden />
            <Card.Description>
              While working at the U of U Hospital, I heard a friend tell me about coding and I immediately knew that it was something I had to do. | Hockey, Coding and Coffee are my joys | Daily goal to absorb new knowlege everyday.
            </Card.Description>
            <Divider hidden />
          </Card>
        </Grid.Column>
        
        <Grid.Column>
          <Card>
            <Image src={Tyler}/>
            <Card.Content>
              <Header>Tyler Cheney</Header>
            </Card.Content>
            <Card.Description>
              <a style={{color: 'black'}} href='http://www.linkedin.com/in/tyler-cheney'>
                <Icon name='github' size="big" />
              </a>
              <a href='http://www.linkedin.com/in/tyler-cheney'>
                <Icon name='linkedin' size="big" />
              </a>
            </Card.Description>
            <Divider hidden />
            <Card.Description>
            After getting a degree in Supply Chain from BYU, I quickly realized that coding is a passion and I needed to make it a career | I believe that innovative thinking plus technology can produce unimaginable results | Runner: 2 marathons, 10+ half marathons.
            </Card.Description>
            <Divider hidden />
          </Card>
        </Grid.Column>
     </Grid>
    </Container>
    </>
  )
}

export default About;