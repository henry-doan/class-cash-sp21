import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Button, Form, Segment, Image, Container, Divider, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png'
import { SharedForm, LeftAlignDiv, MainLogo, GreenButton, GreyButton } from '../../styledComponents/SharedStyles'

const Login = ({ handleLogin, history }) => {
  const [user, setUser] = useState({ email: '', password: '', name: '' })
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user, history);
  }
  return (
    <Segment basic padded="very">
      <Divider hidden />
      <MainLogo src={Logo} centered/>
      <Divider hidden />
      <Divider hidden />
      <Divider hidden />
      <Container>
        <Grid>
          <Grid.Row centered>
            <SharedForm onSubmit={handleSubmit}>
              <LeftAlignDiv>
                <label>Email</label>
              </LeftAlignDiv>
              <Form.Input
                autoFocus
                required         
                name='email'
                value={user.email}
                placeholder='Email'
                onChange={(e, { value }) => setUser({ ...user, email: value })}
              />
              <LeftAlignDiv>
                <label>Password</label>
              </LeftAlignDiv>
              <Form.Input
                required
                name='password'
                value={user.password}
                placeholder='Password'
                type='password'
                onChange={(e, { value }) => setUser({ ...user, password: value })}
              />
              <LeftAlignDiv basic>
                <GreenButton type='submit'>Login</GreenButton>
                <Link to="/register">
                </Link>
                <GreyButton>
                  Create a new account
                </GreyButton>
              </LeftAlignDiv>
            </SharedForm>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}
const ConnectedLogin = (props) => (
  <AuthConsumer>
    { auth => <Login {...props} {...auth} />}
  </AuthConsumer>
)
export default ConnectedLogin;