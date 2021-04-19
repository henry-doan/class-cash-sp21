import { useState, useEffect, useReducer } from 'react'
import { Card, Button, Icon } from "semantic-ui-react";
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

return(
    <Card key={classroom.id}>
      <Card.Content>
        <Card.Header>
          {classroom.name}
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Button> 

          <Link to={{
            pathname: `/Dashboard/${classroom.id}`,
            
            // state: {
            //   classroomId: classroom.id,
            //   enrollmentId: e.id
            // }
          
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