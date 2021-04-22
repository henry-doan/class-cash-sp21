import { useState, useEffect, useReducer } from 'react'
import { Card, Button, Icon, Grid } from "semantic-ui-react";
import { Link, useParams } from 'react-router-dom';
import { ClassroomConsumer } from '../../providers/ClassroomProvider';
import axios from 'axios';

const DropDownClassroom = ({e}) => {
  const [classroom, setClassroom] = useState([])
  
useEffect( () => {
  axios.get(`/api/classrooms/${e.classroom_id}`)
    .then( res => setClassroom(res.data))
    .catch( err => console.log(err))
}, [])

const handleClick = () => {
  window.location.reload()
}

return(
    
    <Card  key={classroom.id}>
      <Card.Content style={{ height:'100px'}}>
        <Card.Header>
          <h1>{classroom.name}</h1>
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Button onClick={handleClick}>
          <Link to={{
            pathname: `/Dashboard/${e.id}/${classroom.id}`,
            
            state: {
              classroomId: classroom.id,
              enrollmentId: e.id
            }
          }}>
            Select
          </Link>
        </Button>
        </Card.Content>
        </Card>
        
  
)
}

const ConnectedDropDownClassroom = (props) => (
  <ClassroomConsumer>
    { value => (
      <DropDownClassroom {...props} {...value} />
    )}
  </ClassroomConsumer>
)

export default ConnectedDropDownClassroom;

// 