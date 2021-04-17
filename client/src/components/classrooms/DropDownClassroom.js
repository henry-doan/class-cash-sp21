import { useState, useEffect } from 'react'
import { Card, Button, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom'
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
            pathname: '/Dashboard',
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

export default DropDownClassroom;