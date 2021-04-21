import { Grid, Header, Segment } from "semantic-ui-react";
import { RewardConsumer } from "../../providers/RewardProvider";
import Reward from './Reward';
import axios from 'axios';
import { useState, useEffect} from 'react';

const AdminRewards = ({location}) => {
  const [classroomRewards, setClassroomRewards] = useState([])

  useEffect( () => {
    axios.get(`/api/classrooms/${location.state.classroomId}/classroomrewards`)
      .then( res => {
        setClassroomRewards(res.data)
      })
      .catch( err => console.log(err))
  },[])
  
  const renderAdminRewards = () => {
    return classroomRewards.map( r => (
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