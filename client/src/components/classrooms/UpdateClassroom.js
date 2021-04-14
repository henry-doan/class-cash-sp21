import { Form, Button } from "semantic-ui-react";
import { ClassroomConsumer } from '../../providers/ClassroomProvider';
import axios from 'axios';
import { useState } from 'react'

const UpdateClassroom = ({id, name, updateClassroom, setEditing}) => {
  const [classroom, setClassroom] = useState({name: name})

  const handleSubmit = (e) => {
    e.preventDefault();
    updateClassroom(id, classroom)
    setEditing(false)
  } 

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input 
        label="Classroom Name"
        placeholder="Classroom Name"
        name="name"
        required
        onChange={(e) => setClassroom({name: e.target.value})}
        value={classroom.name}
      />
      <Button type="submit">Update</Button>
    </Form>
  )
}


const ConnectedUpdateClassroom = (props) => (
  <ClassroomConsumer>
    { value => (
      <UpdateClassroom {...props} {...value} />
    )}
  </ClassroomConsumer>
)

export default ConnectedUpdateClassroom;