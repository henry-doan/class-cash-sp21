import { useState, useEffect } from 'react'
import { Card, Button, Icon } from "semantic-ui-react";
import {ClassroomConsumer} from '../../providers/ClassroomProvider';
import UpdateClassroom from './UpdateClassroom';
import { Link } from 'react-router-dom'
import axios from 'axios';

const Classroom = ({e, deleteClassroom}) => {
  const [editing, setEditing] = useState(false)
  const [classroom, setClassroom] = useState([])
  // const [enrollmentId, setEnrollmentId] = useState(e.id)

  useEffect( () => {
    axios.get(`/api/classrooms/${e.classroom_id}`)
      .then( res => setClassroom(res.data))
      .catch( err => console.log(err))
  }, [])

  return(
    <>
    {editing ?
    <UpdateClassroom {...e } setEditing={setEditing} />
            :
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
              state: {
                classroomId: classroom.id,
                enrollmentId: e.id
              }
            }}>
              Select
            </Link>
          </Button>
          <Button
            onClick={() => setEditing(!editing)}
          >
           Update
          </Button>
          <Button 
            onClick={() => deleteClassroom(classroom.id)}
          >
            <Icon name="trash"/>
          </Button>
          <Button>
            <Link to={{
              pathname: `/Spend/${classroom.id}`,
              state: {
                classroomId: classroom.id,
                enrollmentId: e.id
              }
            }}>
              View Rewards
            </Link>
          </Button>
        </Card.Content>
      </Card>
    }   
    </>
  )
}

const ConnectedClassroom = (props) => (
  <ClassroomConsumer>
    { value => (
      <Classroom {...props} {...value} />
    )}
  </ClassroomConsumer>
)

export default ConnectedClassroom;