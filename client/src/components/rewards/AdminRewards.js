import { Grid, Header, Segment, Button } from "semantic-ui-react";
import { RewardConsumer } from "../../providers/RewardProvider";
import Reward from './Reward';
import axios from 'axios';
import { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

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
      <Grid>
        <Grid.Column floated='left'>
          <Header>Rewards</Header>
        </Grid.Column>
        <Grid.Column floated='right' width={4}>
          <Link
          to={{
            pathname:'/CreateAdminReward',
            
            }}
          > 
          <Button size='large' style={{ backgroundColor: '#1CB993', color: 'white' }}>Create a new Reward
          </Button>
          </Link>
        </Grid.Column>
      </Grid>
      <Grid columns={2}>
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