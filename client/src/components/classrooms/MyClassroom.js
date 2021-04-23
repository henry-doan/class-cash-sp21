import { ClassroomConsumer } from '../../providers/ClassroomProvider'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ClassroomUser from './ClassroomUser'
import AddDeleteEnrollment from '../enrollments/AddDeleteEnrollment'
import { Button, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { AuthConsumer } from '../../providers/AuthProvider'
import { EnrollmentConsumer } from '../../providers/EnrollmentProvider'

const MyClassroom = ({location, user}) => {
  const [classroom, setClassroom] = useState([])
  const [classroomUsers, setClassroomUsers] = useState([])
  const isAdmin = user.isAdmin
  const [enrollment, setEnrollment] = useState([])
  useEffect( () => {
    axios.get(`/api/classroomUsers/${location.state.classroomId}`)
    .then( res => setClassroomUsers(res.data))
    .catch( err => console.log(err))
    axios.get(`/api/classrooms/${location.state.classroomId}`)
    .then( res => setClassroom(res.data) )
    .catch( err => console.log(err) )
    axios.get(`/api/enrollments/${location.state.enrollmentId}`)
    .then( res => setEnrollment(res.data) )
    .catch( err => console.log(err) )
  }, [])


  const renderClassroomUsers = () => {
    let users =[]
    classroomUsers.map( c => {
      if (!c.isAdmin){
        users.push(c)
      }
    })
    return users.map(u => 
      <>
        <Image style={{
        borderRadius: '50%', 
        width: '137px', 
        height: '137px',
        display: 'inline'
        }} 
        src={u.image} 
        alt={u.name} /> 
        {u.name}
      </>
    )
  }

  const renderAdminClassroomUsers = () => {
    let admins = []
    classroomUsers.map( c => {
      if (c.isAdmin){
       admins.push(c)
     }
    })
    return admins.map( u => 
      <>
        <Image style={{
          borderRadius: '50%', 
          width: '137px', 
          height: '137px',
          display: 'inline'
          }} 
          src={u.image} 
          alt={u.name} />
          {u.name}
      </> 
    )
  }

  return(
  <>
    <p>{enrollment}</p>
    <h3>{classroom.name}'s Classroom</h3>
    { renderAdminClassroomUsers() }
    <h3>Classroom Members</h3>
    { renderClassroomUsers() }
    <br />
    <br />
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

const EnrollmentConnectedMyClassroom = (props) => (
  <EnrollmentConsumer>
    { value => (
      <ConnectedMyClassroom {...props} {...value} />
    )}
  </EnrollmentConsumer>
)

const AuthEnrollmentConnectedMyClassroom = (props) => (
  <AuthConsumer>
    { value => (
      <EnrollmentConnectedMyClassroom {...props} {...value} />
    )}
  </AuthConsumer>
)

export default AuthEnrollmentConnectedMyClassroom;