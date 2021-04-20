import { ClassroomConsumer } from '../../providers/ClassroomProvider'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ClassroomUser from './ClassroomUser'
import AddDeleteEnrollment from '../enrollments/AddDeleteEnrollment'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const MyClassroom = ({location, getClassroom}) => {
  const [classroom, setClassroom] = useState([])
  const [classroomUsers, setClassroomUsers] = useState([])

  useEffect( () => {
    axios.get(`/api/classroomUsers/${location.state.classroomId}`)
    .then( res => setClassroomUsers(res.data))
    .catch( err => console.log(err))
  }, [])

  useEffect( () => {
    axios.get(`/api/classrooms/${location.state.classroomId}`)
    .then( res => setClassroom(res.data) )
    .catch( err => console.log(err) )
  }, [])

  const renderClassroomUsers = () => {
    return classroomUsers.map( c => (
      // <ClassroomUser c={c}/>
      <p>{c.name}</p>
    ))
  }

  return(
  <>
    <h1>Classroom</h1>
    <h3>{classroom.name}</h3>
    <h1>Students Enrolled:</h1>
    { renderClassroomUsers() }
    <AddDeleteEnrollment 
    classroomId={location.state.classroomId}
    classroomUsers={classroomUsers}/>
    <br />
    <br />
    <Link to="/ClassroomSelect">
      <Button>See My Classrooms</Button>
    </Link>
  </>
  )
}

const ConnectedMyClassroom = (props) => (
  <ClassroomConsumer>
    { value => (
      <MyClassroom {...props} {...value} />
    )}
  </ClassroomConsumer>
)

export default ConnectedMyClassroom;