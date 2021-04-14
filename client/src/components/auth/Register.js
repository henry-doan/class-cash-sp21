import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Button, Form, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const Register = ({ handleRegister, history }) => {
  const [user, setUser] = useState({ email: '', password: '', passwordConfirmation: '', isAdmin: false }) 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password === user.passwordConfirmation) {
      handleRegister(user, history);
     } else {
      alert('Passwords Do Not Match!')
     }
  }
  return (
    <Segment basic>
      <Header as='h1' textAlign='center'>Register</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Email"
          required
          autoFocus
          name='email'
          value={user.email}
          placeholder='Email'
          onChange={(e, { value }) => setUser({ ...user, email: value })}
        />
        <Form.Input
          label="Password"
          required
          name='password'
          value={user.password}
          placeholder='Password'
          type='password'
          onChange={(e, { value }) => setUser({ ...user, password: value })}
        />
        <Form.Input
          label="Password Confirmation"
          required
          name='passwordConfirmation'
          value={user.passwordConfirmation}
          placeholder='Password Confirmation'
          type='password'
          onChange={(e, { value }) => setUser({ ...user, passwordConfirmation: value })}
        />
        <Segment textAlign='center' basic>
          <Button style={{color: '#ffffff', backgroundColor: '#1CB993' }} type='submit'>Register</Button>
          <Button>
            <Link to="/login" style={{color: 'black'}} >
              Login to an existing account
            </Link>
          </Button>
        </Segment>
      </Form>
    </Segment>
  )
}
const ConnectedRegister = (props) => (
  <AuthConsumer>
    { auth => <Register { ...props } {...auth} /> }
  </AuthConsumer>
)
export default ConnectedRegister;