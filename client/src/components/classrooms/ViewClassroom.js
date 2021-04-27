import { useState } from 'react'
import UpdateClassroom from './UpdateClassroom'
import { Card, Button, Icon, Divider, Grid, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { ClassroomConsumer } from '../../providers/ClassroomProvider'
import { AuthConsumer } from '../../providers/AuthProvider'
import { HoverButton } from '../../styledComponents/SharedStyles'
import { ClassroomCard } from '../../styledComponents/ClassroomStyles'

const ViewClassroom = ({c, deleteClassroom, id, user}) => {
  const [editing, setEditing] = useState(false)
  const isAdmin = user.isAdmin

  const updateDelete = () => {
    if(isAdmin){
      return(
        <Card.Content>
          <Button
            onClick={() => setEditing(!editing)}
            style={{width: '100px'}}
          >
            Update
          </Button>
          <Button color='red'
            onClick={() => deleteClassroom(c.id)}
            style={{
              margin: 'auto',
              width: '100px'
            }} 
          >
            Delete
          </Button>
        </Card.Content>
      )
    }else{
      return(
        <>
        </>
      )
    }
  }
  return(
    <>
      {editing ?
        <UpdateClassroom {...c } setEditing={setEditing} />
                :
        <Grid.Column>
          <Container style={{backgroundColor:"white", height:'auto', width:'auto'}}>
              <HoverButton>
                <ClassroomCard key={c.id} style={{backgroundColor:"#F5F5F5"}}>
                  <Link to={{
                    pathname: '/MyClassroom',
                    state: {
                      classroomId: c.id
                    }
                  }}>
                    <Card.Content>
                      <Card.Header style={{fontSize: '2.25rem', color: '#304540'}}>
                        <Divider hidden />
                        <Divider hidden />
                        {c.name}
                        <Divider hidden />
                      </Card.Header>
                    </Card.Content>
                  </Link>
                  {updateDelete()}
                </ClassroomCard>
              </HoverButton>
          </Container>
        </Grid.Column>
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

const AuthConnectedViewClassroom = (props) => (
  <AuthConsumer>
    { value => (
      <ConnectedViewClassroom {...props} {...value} />
    )}
  </AuthConsumer>
)

export default AuthConnectedViewClassroom;