import ViewClassroom from './ViewClassroom'
import { Segment, Header, Card, Container, Button, Divider, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { ClassroomConsumer } from '../../providers/ClassroomProvider'
import { ClassroomGrid, ClassroomCard } from '../../styledComponents/ClassroomStyles'
import { HoverButton } from '../../styledComponents/SharedStyles'

const ViewClassroomsList = ({classrooms}) => {

  const renderClassrooms = () => {
    return classrooms.map( c => (
      <ViewClassroom c={c}/>
    ))
  }
  return(
    <ClassroomGrid padded centered columns={3}>
        <Card.Group>
        { renderClassrooms() }
          <Grid.Column>
          <Container style={{backgroundColor:"white", height: '191px', width:'275px'}}>
            <Link style={{ color:'white'}} to="/CreateClassroom">
              <HoverButton >
                <ClassroomCard style={{backgroundColor:'#1CB993'}}>
                  <Card.Content style={{ height:'191px'}}>
                    <Card.Header style={{color: 'white'}}>
                      <Divider hidden />
                      <Divider hidden />
                      <h3>Start new classroom</h3>
                    </Card.Header>
                  </Card.Content>
                </ClassroomCard>
              </HoverButton>
            </Link>
          </Container>
          </Grid.Column>
        </Card.Group>
    </ClassroomGrid>
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
