// import { ClassroomConsumer } from "../../providers/ClassroomProvider"
import { Segment, Header, Card, List, Button, Icon } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// import { ClassroomConsumer } from '../../providers/ClassroomProvider'

const ClassroomList = () => {
  const [classrooms ,setClassrooms] = useState([])

  useEffect ( () => {
    axios.get('/api/classrooms')
      .then( res => {
        setClassrooms(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  const deleteClassroom = (id) => {
    axios.delete(`/api/classrooms/${id}`)
      .then( res => {
        setClassrooms(classrooms.filter((classroom) => classroom.id !== id))
      })
      .catch( err => console.log(err))
  }

  const renderClassrooms = () => {
    return classrooms.map( classroom => (
      <Card key={classroom.id}>
        <Card.Content>
          <Card.Header>
            {classroom.name}
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Button>
            <Link to="/UpdateClassroom">
              Update
            </Link>
          </Button>
          <Button
            onClick={() => deleteClassroom(classroom.id)}
          >
            <Icon name="trash"/>Delete
          </Button>
        </Card.Content>
      </Card>
    ))
  }

  return (
    <Segment>
      <Header>ClassroomList</Header>
      <Card.Group>
        { renderClassrooms() }
        <Card>
          <Card.Content>
            <Card.Header>
              <Link to="/CreateClassroom">
                Start new classroom
              </Link>
            </Card.Header>
          </Card.Content>
        </Card>
      </Card.Group>
    </Segment>
  )
}

export default ClassroomList

// const ConnectedClassroomList = (props) => (
//   <ClassroomConsumer>
//     { value => (
//       <ClassroomList {...props} {...value} />
//     )}
//   </ClassroomConsumer>
// )

// export default ConnectedClassroomList