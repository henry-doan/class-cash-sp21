// import { ClassroomConsumer } from "../../providers/ClassroomProvider"
import { Segment, Header, Card, List, Button, Icon, Grid} from 'semantic-ui-react'
import { useState } from 'react'
import { ClassroomConsumer } from '../../providers/ClassroomProvider';
import { Link } from 'react-router-dom'
import Classroom from './Classroom';

const ClassroomList = ({deleteClassroom, classrooms}) => {
 
  
  const renderClassrooms = () => {
    return classrooms.map( c => (
      <Link to={{pathname: `/Dashboards`}} >
      <Classroom c={c}/>
      </Link>
    ))
  }

  return (
    <Segment>
      <Header>Classroom List</Header>
      <Card.Group>
          { renderClassrooms() }
          <Card style={{backgroundColor: '#1CB993'}}>
            <Card.Content>
              <Card.Header textAlign="center">
                <Link to="/CreateClassroom"  style={{color:'white'}}>
                  Start new classroom
                </Link>
              </Card.Header>
            </Card.Content>
          </Card>
      </Card.Group>
    </Segment>
  )
}

const ConnectedClassroomList = (props) => (
  <ClassroomConsumer>
    { value => (
      <ClassroomList {...props} {...value} />
    )}
  </ClassroomConsumer>
)
export default ConnectedClassroomList