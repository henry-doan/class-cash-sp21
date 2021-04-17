import { useState } from 'react';
import { Form, Segment, Button, Header, Modal, Icon } from "semantic-ui-react";
import { ClassroomConsumer } from '../../providers/ClassroomProvider';
import {Link} from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import { EnrollmentConsumer} from '../../providers/EnrollmentProvider';
import axios from 'axios';

const CreateClassroom = ({addClassroom, user }) => {
  const [classroom, setClassroom] = useState({ name: '' })
  const [enrollments, setEnrollments] = useState([])
 
  const getLatestClassroomId = () => {
    axios.get('/api/classroomid')
    .then(res => {
      return(addEnrollment(res.data.id, { classroom_id: res.data.id, user_id: user.id, total_points: 0 }))
    })
    .catch( err => console.log(err))
  }

  const addEnrollment = (classroom_id, enrollment) => {
    axios.post(`/api/classrooms/${classroom_id}/enrollments`, { enrollment })
    .then( res => {
      debugger
      setEnrollments([...enrollments, res.data])
    })
    .catch( err => console.log(err))
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addClassroom(classroom)
    let timer = setTimeout(getLatestClassroomId(), 1000)
    clearTimeout(timer)
    
    setClassroom({name: ""})
  }
  
  return(
  <Segment basic>
    <Header as='h1' textAlign='center'>Create a new ClassRoom</Header>
      <Form onSubmit={handleSubmit}>
      <Form.Input
        label="ClassRoom Name"
        required
        autoFocus
        name='name'
        value={classroom.name}
        placeholder='Enter ClassRoom Name'
        onChange={(e, { value }) => setClassroom({ ...classroom, name: value })}
        />
      <Segment textAlign='center' basic>
          <Modal 
            trigger={<Button style={{color: '#ffffff', backgroundColor: '#1CB993' }} type='submit'>Submit</Button>}>
              <Header textAlign='center'>Classroom Created. Continue To Classrooms</Header>
                <Modal.Actions>
                  <Button color='green' inverted>
                    <Icon name="checkmark" /> Ok
                  </Button>
                </Modal.Actions>
          </Modal>
        <br />
        <br />
        <Button style={{backgroundColor: '#1CB993' }}><Link style={{color: 'white'}}to='/ViewClassrooms'>Show All Classrooms</Link></Button>
      </Segment>
      </Form>
  </Segment>
)}

const ConnectedCreateClassroom = (props) => (
  <ClassroomConsumer>
    { value => (
      <CreateClassroom {...props} {...value} />
    )}
  </ClassroomConsumer>
)

const EnrollmentConnectedCreateClassroom = (props) => (
  <EnrollmentConsumer>
    {
      value => (
        <ConnectedCreateClassroom {...props} { ...value} />
      )
    }
  </EnrollmentConsumer>
)

const AuthConnectedCreateClassroom = (props) => (
  <AuthConsumer>
    {
      value => (
        <EnrollmentConnectedCreateClassroom {...props} {...value} />
      )
    }
  </AuthConsumer>
)
export default AuthConnectedCreateClassroom;