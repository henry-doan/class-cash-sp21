import { ClassroomConsumer } from '../../providers/ClassroomProvider'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ClassroomUser from './ClassroomUser'
import AddDeleteEnrollment from '../enrollments/AddDeleteEnrollment'
import { Button, Grid, Image, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { AuthConsumer } from '../../providers/AuthProvider'
import { EnrollmentConsumer } from '../../providers/EnrollmentProvider'
import ImageDefault from '../images/ImageDefault.jpeg'
import { GreenButton, MyHeader } from '../../styledComponents/SharedStyles'

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
      <Grid style={{display: 'inline-block', padding:'2%'}}>
        <Grid.Row>
        <Grid.Row >
          <Image style={{
            borderRadius: '50%', 
            width: '137px', 
            height: '137px',
            display: 'inline'
            }} 
              src={u.image || ImageDefault } 
              alt={u.name} />
               {/* </Grid.Row>
               <Grid.Row> */}
            <div style={{textAlign:'center'}}>{u.name}</div>
        </Grid.Row>
        </Grid.Row>
    </Grid> 
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
      <Grid style={{display: 'inline-block', padding:'2%'}}>
      <Grid.Row>
      <Grid.Row >
        <Image style={{
          borderRadius: '50%', 
          width: '137px', 
          height: '137px',
          display: 'inline'
          }} 
            src={u.image} 
            alt={u.name} />
             {/* </Grid.Row>
             <Grid.Row> */}
          <div style={{textAlign:'center'}}>{u.name}</div>
      </Grid.Row>
      </Grid.Row>
  </Grid>
    )
  }

  return(
  <>
    <Grid>
      <Grid.Column floated='left' width={3}>
        <AddDeleteEnrollment 
        classroomId={location.state.classroomId}
        classroomUsers={classroomUsers}/>
      </Grid.Column>
      <Grid.Column floated='left' width={13}>
        <Link to="/ViewClassrooms">
          <GreenButton style={{width: '175px'}}>See All Classrooms</GreenButton>
        </Link>
      </Grid.Column>
    </Grid>
    <MyHeader>{classroom.name}'s Classroom</MyHeader>
    <div style={{borderRadius: '16px', backgroundColor: '#EDF9F6', display: 'inline-block', padding: '25px'}}>
      <h3>Classroom Admins</h3>
      { renderAdminClassroomUsers() }
    </div>
    <h3>Classroom Members</h3>
    { renderClassroomUsers() }
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