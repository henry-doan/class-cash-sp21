import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Button, Form, Segment, Header, Select, Divider, Grid, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Logo from '../images/Logo.png'
import { SharedForm, LeftAlignDiv, MainLogo, GreenButton, GreyButton } from '../../styledComponents/SharedStyles'

const RegisterAdmin = ({ handleRegister, history }) => {
  const [user, setUser] = useState({ name: '', email: '', password: '', passwordConfirmation: '', isAdmin: true }) 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.passwordConfirmation) {
      handleRegister(user, history);
     } else {
      alert('Passwords Do Not Match!')
     }
  }

  const adminOpts = [
    {key: 't', value: true, text: 'Yes'},
    {key: 'f', value: false, text: 'No'}
  ]
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
              <label>Name</label>
            </LeftAlignDiv>
            <Form.Input
                required
                autoFocus
                name='name'
                value={user.name}
                placeholder='Name'
                onChange={(e, { value }) => setUser({ ...user, name: value })}
              />
              <LeftAlignDiv>
                <label>Email</label>
              </LeftAlignDiv>
              <Form.Input
                required
                autoFocus
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
              <LeftAlignDiv>
                <label>Password Confirmation</label>
              </LeftAlignDiv>
              <Form.Input
                required
                name='passwordConfirmation'
                value={user.passwordConfirmation}
                placeholder='Password Confirmation'
                type='password'
                onChange={(e, { value }) => setUser({ ...user, passwordConfirmation: value })}
              />
              <LeftAlignDiv>
                <label>Are you an Admin?</label>
              </LeftAlignDiv>
              <Select fluid placeholder='Are you an Admin?' options={adminOpts} />
              <LeftAlignDiv basic>
              <Divider hidden />
                <GreenButton type='submit'>Register</GreenButton>
                <Link to="/login">
                  <GreyButton>
                    Login to an existing account
                  </GreyButton>
                </Link>
              </LeftAlignDiv>
            </SharedForm>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  )
}
const ConnectedRegisterAdmin = (props) => (
  <AuthConsumer>
    { auth => <RegisterAdmin { ...props } {...auth} /> }
  </AuthConsumer>
)
export default ConnectedRegisterAdmin;