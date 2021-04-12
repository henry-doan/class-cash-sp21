import { useState } from 'react';
import { Form, Segment, Button, Header } from "semantic-ui-react";

const CreateClassroom = () => {
  const [classroom, setClassroom] = useState({ name: '' })
  const handleSubmit = (e) => {
    e.preventDefault();
    
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
        <Button style={{color: '#ffffff', backgroundColor: '#1CB993' }} type='submit'>Submit</Button>
      </Segment>
      </Form>
  </Segment>
)}
export default CreateClassroom;