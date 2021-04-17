import { RewardConsumer } from '../../providers/RewardProvider'
import { useState, useEffect } from 'react'
import axios from 'axios'

const MyRewards = ({enrollmentId}) => {
  const [rewards, setRewards] = useState([])

  useEffect( () => {
    axios.get(`/api/enrollments/${enrollmentId}/rewards`)
      .then( res => {
        setRewards(res.data)
      })
      .catch( err => console.log(err))
  },[])

  const renderRewards = () => {
    return rewards.map( r => (
      // <Reward r={r}/>
      <p>{r.name}</p>
    ))
  }

  return(
    <>
      {renderRewards()}
    </>
  )
}

const ConnectedMyRewards = (props) => (
  <RewardConsumer>
    { value => (
      <MyRewards {...props} {...value} />
    )}
  </RewardConsumer>
)

export default ConnectedMyRewards