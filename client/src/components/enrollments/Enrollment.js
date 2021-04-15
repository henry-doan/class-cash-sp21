import AuthConsumer from '../../providers/AuthProvider'
import { useState, useEffect, Component } from 'react'
import axios from 'axios'
import { Segment } from 'semantic-ui-react'

const Enrollment = ({classroomId, user}) => {
  const [enrollment, setEnrollment] = useState([])

  // const [user, setUser] = useState(user)

  useEffect( () => {
    axios.get(`/api/classrooms/${classroomId}/enrollments/51`)
      .then( res => setEnrollment(res.data) )
      .catch( err => console.log(err) )
  }, [])

  return(
    <>
      <h1>{enrollment.total_points}</h1>
       {/* { enrollments.length > 0 ? 
//         <>
//           { enrollments.map( e => 
//             <>
//               <p key={e.id}>{e.total_points}</p>
//             </>  
//           )}
//         </>
//       : <p>No enrollments connected</p>} */}
    </>
  )
}

// const ConnectedEnrollment = (props) => (
//   <AuthConsumer>
//     { value => (
//       <Enrollment {...props} {...value} />
//     )}
//   </AuthConsumer>
// )
// const ConnectedEnrollment = (props) => (
//   <AuthConsumer>
//     { value => 
//       <Enrollment {...props} {...value} />
//     }
//   </AuthConsumer>
// )

// export default ConnectedEnrollment;

export default Enrollment