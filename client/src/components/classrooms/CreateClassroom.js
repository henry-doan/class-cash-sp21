import { useState } from 'react';
import { Form, Segment, Button, Header, Modal, Icon, Divider } from "semantic-ui-react";
import { ClassroomConsumer } from '../../providers/ClassroomProvider';
import {Link} from 'react-router-dom';
import { AuthConsumer } from '../../providers/AuthProvider';
import { EnrollmentConsumer} from '../../providers/EnrollmentProvider';
import axios from 'axios';
import { GreenButton } from '../../styledComponents/SharedStyles';

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
    window.location.assign('/ViewClassrooms')
  }
  
  return(
  <Segment basic textAlign='center'>
    <Divider horizontal>
      <Header as='h3'><Icon name='folder' />Create a new ClassRoom</Header></Divider>
      <Divider hidden />
      <Form onSubmit={handleSubmit}>
        <Form.Group inline>
          <Form.Input
            width={12}
            label="ClassRoom Name"
            required
            autoFocus
            name='name'
            value={classroom.name}
            placeholder='Enter ClassRoom Name'
            onChange={(e, { value }) => setClassroom({ ...classroom, name: value })}
            />
            <Modal 
              trigger={<GreenButton type='submit'>Submit</GreenButton>}>
                <Header textAlign='center'>Classroom Created. Continue To Classrooms</Header>
                  <Modal.Actions>
                    <Button color='green' inverted>
                      <Icon name="checkmark" /> Ok
                    </Button>
                  </Modal.Actions>
            </Modal> 
          </Form.Group>
        </Form>
      <Divider hidden />
      <Divider hidden />
      <Divider horizontal>
        <Header as='h3'><Icon name='folder outline' />Show all Classrooms</Header></Divider>
      <Divider hidden />
      <Link style={{color: 'white'}}to='/ViewClassrooms'>
        <GreenButton>
          Show All Classrooms
        </GreenButton>
      </Link>
      <Divider hidden />
      <Divider hidden />
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