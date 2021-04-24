import AuthConsumer from '../../providers/AuthProvider'
import { useState, useEffect, Component } from 'react'
import axios from 'axios'
import { Segment } from 'semantic-ui-react'
import { MyPoints } from '../../styledComponents/DashboardStyles'

const Enrollmentpoints = ({classroomId, enrollmentId}) => {
  // const [enrollment, setEnrollment] = useState([])
  const [total, setTotal] = useState(0)
 // const [user, setUser] = useState(user)

  useEffect( () => {
    axios.get(`/api/totalPoints/${enrollmentId}`)
      .then( res => {
        setTotal(res.data)
      })
      .catch( err => console.log(err))
  }, [])  

  // useEffect( () => {
  //   axios.get(`/api/classrooms/${classroomId}/enrollments/${enrollmentId}`)
  //     .then( res => setEnrollment(res.data) )
  //     .catch( err => console.log(err) )
  // }, [])

  return(
    <>
      <MyPoints>{total}</MyPoints>
    </>
  )
}

export default Enrollmentpoints