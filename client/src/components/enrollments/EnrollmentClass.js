import { useState, useEffect, Component } from 'react'
import axios from 'axios'
import { Segment } from 'semantic-ui-react'
import { ClassroomConsumer } from '../../providers/ClassroomProvider'

const EnrollmentClass = (props, user) => {
  const [classroomUsers, setClassroomUsers] = useState([])
  const isAdmin = user.isAdmin

  useEffect( () => {
    axios.get(`/api/classroomUsers/${props.classroomId}`)
    .then( res => setClassroomUsers(res.data))
    .catch( err => console.log(err))
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
        {/* <Image src={u.image} alt={u.name} />  */}
           {u.name}|| <space />   
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
    return admins.map( u => u.name)
  }

  return(
    <>
      <h4></h4>
      <h4>{renderAdminClassroomUsers()}|| {renderClassroomUsers()}</h4>
      
    </>
  )
}

const ConnectedEnrollmentClass = (props) => (
  <ClassroomConsumer>
    { value => (
      <EnrollmentClass {...props} {...value} />
    )}
  </ClassroomConsumer>
)

export default ConnectedEnrollmentClass;