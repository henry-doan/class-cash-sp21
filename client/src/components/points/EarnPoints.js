import { useEffect, useState } from "react"
import { Header } from "semantic-ui-react"
import axios from 'axios'
import Earn from "./Earn"
import { PointConsumer } from "../../providers/PointProvider"
import MyEarned from "./MyEarned"
import { GreenButton } from "../../styledComponents/SharedStyles"



const EarnPoints = ({location}) => {
  const [points, setPoints] = useState([])

  // useEffect( () => {
  //   axios.get(`/api/enrollments/${enrollmentId}/points`)
  //     .then( res => {
  //       setPoints(res.data)
  //     })
  //     .catch( err => console.log(err))
  // },[])

  // const renderEarned = () => {
  //   return points.map( e => (
  //     <Earn e={e}/>
  //   ))
  // }
  
  
  return(
    <>
      <GreenButton >
        <a style={{color: 'white'}} href="javascript:history.back()">Back to Dashboard</a>
      </GreenButton>
      <h1>Earn Points</h1>
      <p>Your teacher can award you classroom points</p>
      <MyEarned
        classroomId={location.state.classroomId}
        enrollmentId={location.state.enrollmentId}
      />
    </>
  )
}

const ConnectedEarnPoints = (props) => (
  <PointConsumer>
    { value => (
      <EarnPoints {...props} {...value} />
    )}
  </PointConsumer>
)

export default ConnectedEarnPoints