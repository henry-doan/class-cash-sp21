import { ClassroomConsumer } from '../../providers/ClassroomProvider'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ClassroomUser from './ClassroomUser'
import AddDeleteEnrollment from '../enrollments/AddDeleteEnrollment'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { AuthConsumer } from '../../providers/AuthProvider'

const MyClassroom = ({location, user}) => {
  const [classroom, setClassroom] = useState([])
  const [classroomUsers, setClassroomUsers] = useState([])
  const isAdmin = user.isAdmin
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
    <h3>{classroom.name}'s Classroom</h3>
      {renderClassroomUsers() - !isAdmin}
    <h3>Classroom Members</h3>
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

const AuthConnectedMyClassroom = (props) => (
  <AuthConsumer>
    { value => (
      <ConnectedMyClassroom {...props} {...value} />
    )}
  </AuthConsumer>
)

export default AuthConnectedMyClassroom;