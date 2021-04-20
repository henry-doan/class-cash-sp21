import { useState } from 'react';
import { AuthConsumer } from "../../providers/AuthProvider";
import { Button, Form, Segment, Header, Select } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
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
    <Segment basic>
      <Header as='h1' textAlign='center'>Register</Header>
      <Form onSubmit={handleSubmit}>
      <Form.Input
          label="Name"
          required
          autoFocus
          name='name'
          value={user.name}
          placeholder='name'
          onChange={(e, { value }) => setUser({ ...user, name: value })}
        />
        
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
        <Select fluid placeholder='Are you an Admin?' options={adminOpts} />
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
const ConnectedRegisterAdmin = (props) => (
  <AuthConsumer>
    { auth => <RegisterAdmin { ...props } {...auth} /> }
  </AuthConsumer>
)
export default ConnectedRegisterAdmin;