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
    <>
      <Divider hidden />
      <DropdownGrid padded centered columns={3} verticalAlign="middle">
          <Divider hidden/>
          <Card.Group>
            
            { renderUserEnrollments() }
            
            <Grid.Column>
              <Container style={{backgroundColor:"white", height: '191px', width:'275px'}}>
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
              </Container>
            </Grid.Column>
          </Card.Group>
      </DropdownGrid>

    </>

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