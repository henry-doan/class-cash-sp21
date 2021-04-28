import { useState, useEffect } from 'react'
import { Card, Button, Icon } from "semantic-ui-react";
import {ClassroomConsumer} from '../../providers/ClassroomProvider';
import UpdateClassroom from './UpdateClassroom';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { AuthConsumer } from '../../providers/AuthProvider';
import { GreenButton } from '../../styledComponents/SharedStyles'

const Classroom = ({e, deleteClassroom}) => {
  const [editing, setEditing] = useState(false)
  const [classroom, setClassroom] = useState([])
  // const [enrollmentId, setEnrollmentId] = useState(e.id)

  useEffect( () => {
    axios.get(`/api/classrooms/${e.classroom_id}`)
      .then( res => setClassroom(res.data))
      .catch( err => console.log(err))
  }, [])
  
  const handleClick = () => {
    //window.location.href = window.location.href
  }
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
          <GreenButton onClick={handleClick}>
            <Link to={{
              pathname: `/Dashboard/${e.id}/${classroom.id}`,
              state: {
                classroomId: classroom.id,
                enrollmentId: e.id
              }
            }}
            style={{color: 'white'}}
            >
              View Dashboard
            </Link>
          </GreenButton>
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