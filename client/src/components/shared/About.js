import Footer from './Footer';
import { Container, Divider, Icon, Header, Card, Image, Grid} from 'semantic-ui-react';
import Harry from '../images/Harry.png';
import Tyler from '../images/Tyler.jpeg';

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
            After getting a degree in Supply Chain from BYU, I quickly realized that coding is a passion of mine and that I had to make it a career if it killed me | I believe that innovative thinking plus technology can produce unimaginable results | Everyone has a creative outlet, for me..it's coding | Runner: 2 marathons, 10+ half marathons.
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