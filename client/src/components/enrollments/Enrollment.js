import AuthConsumer from '../../providers/AuthProvider'
import { useState, useEffect, Component } from 'react'
import axios from 'axios'
import { Segment } from 'semantic-ui-react'

const Enrollment = ({classroomId, enrollmentId}) => {
  const [enrollment, setEnrollment] = useState([])

  // const [user, setUser] = useState(user)

  useEffect( () => {
    axios.get(`/api/classrooms/${classroomId}/enrollments/${enrollmentId}`)
      .then( res => setEnrollment(res.data) )
      .catch( err => console.log(err) )
  }, [])

  return(
    <>
      <h1>{enrollment.total_points}</h1>
    </>
  )
}

export default Enrollment