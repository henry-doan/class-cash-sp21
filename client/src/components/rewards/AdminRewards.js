import { Grid, Header, Segment, Button } from "semantic-ui-react";
import { RewardConsumer } from "../../providers/RewardProvider";
import Reward from './Reward';
import axios from 'axios';
import { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { GreenButton } from "../../styledComponents/SharedStyles";
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
    <>
      <Grid>
        <Grid.Column style={{width: "215px"}}>
          <br />
          <Header style={{ fontSize:'36px'}} >Rewards</Header>
        </Grid.Column>
        <Grid.Column floated='right' width={4}>
          <Link
          to={{
            pathname:'/CreateAdminReward',
            state: {
              classroomId: location.state.classroomId,
            }
            }}
          > 
          <br />
          <br />
          <br />
          <GreenButton>Create a new Reward
          </GreenButton>
          </Link>
        </Grid.Column>

          {renderAdminRewards()}
          <GreenButton >
      <a style={{color: 'white'}} href="javascript:history.back()">Dashboard</a>
      </GreenButton>
      

      </Grid>
   </>
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