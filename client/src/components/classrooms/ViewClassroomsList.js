import ViewClassroom from './ViewClassroom'
import { Segment, Header, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { ClassroomConsumer } from '../../providers/ClassroomProvider'

const ViewClassroomsList = ({classrooms}) => {

  const renderClassrooms = () => {
    return classrooms.map( c => (
      <ViewClassroom c={c}/>
    ))
  }
  return(
    <Segment>
      <Header>Classroom List</Header>
      <Card.Group>
        <Card>
          <Card.Content>
            <Card.Header>
              <Link to="/CreateClassroom">
                Start new classroom
              </Link>
            </Card.Header>
          </Card.Content>
        </Card>
        { renderClassrooms() }
      </Card.Group>
    </Segment>
  )

}

const ConnectedViewClassroomsList = (props) => (
  <ClassroomConsumer>
    { value => (
      <ViewClassroomsList {...props} {...value} />
    )}
  </ClassroomConsumer>
)

export default ConnectedViewClassroomsList
