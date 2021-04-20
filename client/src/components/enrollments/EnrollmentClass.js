import { useState, useEffect, Component } from 'react'
import axios from 'axios'
import { Segment } from 'semantic-ui-react'
import { ClassroomConsumer } from '../../providers/ClassroomProvider'

const EnrollmentClass = (props) => {
  const [classroomUsers, setClassroomUsers] = useState([])


  useEffect( () => {
    axios.get(`/api/classroomUsers/${props.classroomId}`)
    .then( res => setClassroomUsers(res.data))
    .catch( err => console.log(err))
  }, [])

  const renderClassroomUsers = () => {
    return classroomUsers.map( c => (
     <>| {c.name}, |</>
    ))
  }

  return(
    <>
      <h4>{renderClassroomUsers()}</h4>
      
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