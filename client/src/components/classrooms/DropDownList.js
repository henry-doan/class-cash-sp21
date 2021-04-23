import { Segment, Header, Card, List, Button, Icon, Grid, Divider, Container } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import { AuthConsumer } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom'
import DropDownClassroom from './DropDownClassroom';
import axios from 'axios';
import { DropdownGrid } from '../../styledComponents/SharedStyles'

const DropDownList = ({user}) => {
  const [userEnrollments, setUserEnrollments] = useState([])

  useEffect( () => {
    axios.get(`/api/userEnrollments/${user.id}`)
    .then( res => setUserEnrollments(res.data))
    .catch( err => console.log(err))
  }, [])
  
  const renderUserEnrollments = () => {
    return userEnrollments.map( e => (
      <DropDownClassroom e={e}/>
    ))
  }

  return (
    <DropdownGrid style={{padding:'52px', height:'350px'}}>
    <Container>
      <Divider hidden/>
      <Card.Group>
        { renderUserEnrollments() }
        <Card>
          <Card.Content style={{backgroundColor:"#1CB993"}}>
            <Card.Header style={{padding:'50px'}} textAlign='center'>
              <Link style={{ color:'white'}} to="/ClassroomSelect">
                See My Classrooms
              </Link>
            </Card.Header>
          </Card.Content>
        </Card>
      </Card.Group>
    </Container>
    </DropdownGrid>
  )
}


const ConnectedDropDownList = (props) => (
  <AuthConsumer>
    { value => (
      <DropDownList {...props} {...value} />
    )}
  </AuthConsumer>
)
export default ConnectedDropDownList