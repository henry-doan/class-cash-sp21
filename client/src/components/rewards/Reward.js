import { Card, Grid, Button } from "semantic-ui-react";

import { RewardConsumer } from '../../providers/RewardProvider';
import { AuthConsumer } from '../../providers/AuthProvider';
import { useState } from 'react';
import UpdateReward from './UpdateReward';

const Reward = ({r, enrollmentId, updateReward, user}) => {
  const [reward, setReward] = useState({name: r.name, cost: r.cost, desc: r.desc, redeemed: true, enrollment_id: r.enrollment_id})
  const [editing, setEditing] = useState(false)
  const isAdmin = user.isAdmin

  const handleRedeem = (e) => {
    e.preventDefault()
    updateReward(r.id, enrollmentId, reward)
    window.location.reload()
  }
  return(
    <>
{   !r.redeemed? 
  <> { editing? 
      <UpdateReward {...r} setEditing={setEditing}/>
      :
    <>{ isAdmin? 
      <Grid.Row>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>
                {r.name}
              </Card.Header>
              <Card.Description>
                {r.desc}
              </Card.Description>
              <br/>
              <Card.Meta>
                {r.cost}
              </Card.Meta>
            </Card.Content>
            <Button onClick={() => setEditing(!editing)}>
              Update Reward
            </Button>
          </Card>
        </Grid.Column>
      </Grid.Row>
      : 
      <Grid.Row>
        <Grid.Column>
          <Card>
            <Card.Content>
              <Card.Header>
                {r.name}
              </Card.Header>
              <Card.Description>
                {r.desc}
              </Card.Description>
              <br/>
              <Card.Meta>
                {r.cost}
              </Card.Meta>
            </Card.Content>
            <Button onClick={handleRedeem}>
              Use Reward
            </Button>
          </Card>
        </Grid.Column>
      </Grid.Row>
}</>
}</>: ""
}</>
)}

const ConnectedReward = (props) => (
  <AuthConsumer>
    {
      value => (
        <Reward {...props} {...value} />
      )
    }
  </AuthConsumer>
)

const AuthConnectedReward = (props) => (
  <AuthConsumer>
    {
      value => (
        <ConnectedReward {...props} {...value} />
      )
    }
  </AuthConsumer>
)
export default AuthConnectedReward;