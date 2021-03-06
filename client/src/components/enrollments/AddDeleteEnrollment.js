import { Button, Form } from 'semantic-ui-react'
import { AuthConsumer } from '../../providers/AuthProvider'
import { EnrollmentConsumer } from '../../providers/EnrollmentProvider'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { GreenButton } from '../../styledComponents/SharedStyles'

const AddDeleteEnrollment = ({user, classroomId, classroomUsers, addEnrollment, deleteEnrollment}) => {
  const [enrollment, setEnrollment] = useState({ total_points: 0, user_id: user.id })
  const [showForm, setShowForm] = useState(false)
  const [findEnrollment, setFindEnrollment] = useState([{total_points: 0, user_id: 0}])

  useEffect ( () => {
    axios.get(`api/findEnrollment/${user.id}/${classroomId}`)
      .then( res => {
        setFindEnrollment(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  const handleSubmission = (e) => {
    e.preventDefault()
    addEnrollment(classroomId, enrollment)
    window.location.href = window.location.href
  }

  const handleDeletion = (e) => {
    e.preventDefault()
    deleteEnrollment(findEnrollment[0].id, classroomId)
    window.location.href = window.location.href
  }

  if (classroomUsers.some( c => c.id === user.id)) {
    return(
      <>
        <GreenButton
          onClick={handleDeletion}
          style={{width: '175px'}}
        >Leave Class</GreenButton>
      </>
    )
  }

  return(
    <>
      <GreenButton
        onClick={handleSubmission}
        style={{width: '175px'}}
      >Enroll in Class</GreenButton>
    </>
  )
}

const ConnectedAddDeleteEnrollment = (props) => (
  <EnrollmentConsumer>
    { value => (
      <AddDeleteEnrollment {...props} {...value} />
    )}
  </EnrollmentConsumer>
)

const AuthConnectedAddDeleteEnrollment = (props) => (
  <AuthConsumer>
    { value => (
      <ConnectedAddDeleteEnrollment {...props} {...value} />
    )}
  </AuthConsumer>
)

export default AuthConnectedAddDeleteEnrollment;