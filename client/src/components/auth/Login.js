import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Button, Form, Segment, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
const Login = ({ handleLogin, history }) => {
  const [user, setUser] = useState({ email: '', password: '' })
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user, history);
  }
  return (
    <Segment basic>
      <Header as='h1' textAlign='center'>ClassCash</Header>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          label="Email"
          autoFocus
          required         
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
        <Segment textAlign='center' basic>
          <Button style={{color: '#ffffff', backgroundColor: '#1CB993' }} type='submit'>Login</Button>
          <Button>
            <Link to="/register" style={{color: 'black'}}>
              Create a new account
            </Link>
          </Button>
        </Segment>
      </Form>
    </Segment>
  )
}
const ConnectedLogin = (props) => (
  <AuthConsumer>
    { auth => <Login {...props} {...auth} />}
  </AuthConsumer>
)
export default ConnectedLogin;