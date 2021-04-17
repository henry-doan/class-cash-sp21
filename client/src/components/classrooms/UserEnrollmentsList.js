import { Segment, Header, Card, List, Button, Icon } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import { AuthConsumer } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom'
import Classroom from './Classroom';
import axios from 'axios';

const UserEnrollmentsList = ({user}) => {
  const [userEnrollments, setUserEnrollments] = useState([])

  useEffect( () => {
    axios.get(`/api/userEnrollments/${user.id}`)
    .then( res => setUserEnrollments(res.data))
    .catch( err => console.log(err))
  }, [])
  
  const renderUserEnrollments = () => {
    return userEnrollments.map( e => (
      <Classroom e={e}/>
    ))
  }

  return (
    <Segment>
      <Header>Classroom List</Header>
      <Card.Group>
        { renderUserEnrollments() }
      </Card.Group>
    </Segment>
  )
}

const ConnectedUserEnrollmentsList = (props) => (
  <AuthConsumer>
    { value => (
      <UserEnrollmentsList {...props} {...value} />
    )}
  </AuthConsumer>
)
export default ConnectedUserEnrollmentsList