import { RewardConsumer } from '../../providers/RewardProvider'
import { useState, useEffect } from 'react'
import axios from 'axios'
import DashboardReward from './DashboardReward'
import { Card, Grid, Header } from 'semantic-ui-react'
import { MyHeader } from '../../styledComponents/SharedStyles'

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
    return rewards.map( r => 
      (
      <DashboardReward 
        r={r}
        enrollmentId={enrollmentId}
      />
    ))
  }

  return(
    <>
      <MyHeader>My Rewards</MyHeader>
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