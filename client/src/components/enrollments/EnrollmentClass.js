import { useState, useEffect, Component } from 'react'
import axios from 'axios'
import { Image, Segment } from 'semantic-ui-react'
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
        
        <Image style={{
          borderRadius: '50%', 
          width: '98px', 
          height: '98px',
          display: 'inline',
          }} 
          src={u.image} 
          alt={u.name} /> 
             
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
          width: '98px', 
          height: '98px',
          display: 'inline',
          border: '4px solid #1CB993'
          }} 
          src={u.image} 
          alt={u.name} /> 
        </>
        )
  }

  return(
    <>
      
      {renderAdminClassroomUsers()} {renderClassroomUsers()}
      
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