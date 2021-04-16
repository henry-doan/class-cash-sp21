import { useState } from 'react';
import { Form, Segment, Button, Header, Modal, Icon } from "semantic-ui-react";
import { ClassroomConsumer } from '../../providers/ClassroomProvider';
import {Link} from 'react-router-dom';

const CreateClassroom = ({addClassroom}) => {
  const [classroom, setClassroom] = useState({ name: '' })
 
  const handleSubmit = (e) => {
    e.preventDefault()
    addClassroom(classroom)
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
        <Button style={{backgroundColor: '#1CB993' }}><Link style={{color: 'white'}}to=''>Show All Classrooms</Link></Button>
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
export default ConnectedCreateClassroom;