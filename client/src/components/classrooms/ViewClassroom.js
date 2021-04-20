import { useState } from 'react'
import UpdateClassroom from './UpdateClassroom'
import { Card, Button, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { ClassroomConsumer } from '../../providers/ClassroomProvider'

const ViewClassroom = ({c, deleteClassroom, id}) => {
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
              <Button>
                <Link to={{
                  pathname: '/MyClassroom',
                  state: {
                    classroomId: c.id
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
              <Button color='red'
                onClick={() => deleteClassroom(c.id)}
              >
                <Icon name="trash"/>
              </Button>
            </Card.Content>
          </Card>
        }   
    </>
  )
}

const ConnectedViewClassroom = (props) => (
  <ClassroomConsumer>
    { value => (
      <ViewClassroom {...props} {...value} />
    )}
  </ClassroomConsumer>
)

export default ConnectedViewClassroom;