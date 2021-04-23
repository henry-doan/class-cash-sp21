import { Segment, Header, Card, List, Button, Icon, Grid, Divider, Container } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import { AuthConsumer } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom'
import DropDownClassroom from './DropDownClassroom';
import axios from 'axios';
import { DropdownGrid, HoverButton } from '../../styledComponents/SharedStyles'
import { NavCard, NavH1 } from '../../styledComponents/NavStyles'

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
    <DropdownGrid style={{padding:'15px', height:'251px'}}>
      <Container>
        <Divider hidden/>
        <Card.Group>
          
          { renderUserEnrollments() }
          
          <Button style={{backgroundColor:"white", height: '191px', width:'275px'}}>
            <Link style={{ color:'white'}} to="/ViewClassrooms">
              <HoverButton >
                <NavCard style={{backgroundColor:'#1CB993'}}>
                  <Card.Content style={{ height:'191px'}}>
                    <Card.Header style={{color: 'white'}}>
                      <Divider hidden />
                      <Divider hidden />
                        <h3>View All Classrooms</h3>
                    </Card.Header>
                  </Card.Content>
                </NavCard>
              </HoverButton>
            </Link>
          </Button>
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