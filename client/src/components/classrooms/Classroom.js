import { useState } from 'react'
import { Card, Button, Icon } from "semantic-ui-react";
import {ClassroomConsumer} from '../../providers/ClassroomProvider';
import UpdateClassroom from './UpdateClassroom';
const Classroom = ({c, deleteClassroom}) => {
  const [editing, setEditing] = useState(false)

  return(
    <>
    {editing ?
    <UpdateClassroom {...c } setEditing={setEditing} />
            :
    <Card key={c.id}>
        <Card.Content>
          <Card.Header>
            {c.name}
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Button
            onClick={() => setEditing(!editing)}
          >
           Update
          </Button>
          <Button
            onClick={() => deleteClassroom(c.id)}
          >
            <Icon name="trash"/>Delete
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