import { RewardConsumer } from '../../providers/RewardProvider'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Reward from './Reward'
import { Card, Grid, Header } from 'semantic-ui-react'

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
      <Reward 
        r={r}
        enrollmentId={enrollmentId}
      />
    ))
  }

  return(
    <>
      <Header>My Rewards</Header>
      <Grid columns={1}>
        {renderRewards()}
      </Grid>
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