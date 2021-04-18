import { Grid, Header, Segment } from "semantic-ui-react";
import { RewardConsumer } from "../../providers/RewardProvider";
import Reward from './Reward';
import axios from 'axios';
import { useState, useEffect} from 'react';

const AdminRewards = ({enrollmentId}) => {
  const [rewards, setRewards] = useState([])

  useEffect( () => {
    axios.get(`/api/enrollments/${enrollmentId}/rewards`)
      .then( res => {
        setRewards(res.data)
      })
      .catch( err => console.log(err))
  },[])
  debugger
  const renderAdminRewards = () => {
    return rewards.map( r => (
      <Reward r={r}/>
    ))
  }

  return(
    <Segment basic>
      <Header>Rewards</Header>
      <Grid columns={1}>
        {renderAdminRewards()}
      </Grid>
    </Segment>
  )}

const ConnectedAdminRewards = (props) => (
  <RewardConsumer>
    {
      value => (
        <AdminRewards {...props} {...value} />
      )
    }
  </RewardConsumer>
)
export default ConnectedAdminRewards;