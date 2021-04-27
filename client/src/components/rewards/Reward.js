import { Card, Grid, Button, Divider } from "semantic-ui-react";

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
          <Card style={{ width: '1070px'}}>
            <Card.Content>
              <Card.Header>
                {r.name}
              </Card.Header>
              <Card.Description>
                {r.desc}
              </Card.Description>
              <br/>
            
              <Grid centered columns={2}>
                <Grid.Column float='left' width={9}>
                  <Card.Meta style={{fontSize: '14px', color: 'black'}}>
                    {r.cost}
                  </Card.Meta>
                </Grid.Column>
                <Grid.Column float='right' width={6}>
                <a onClick={() => setEditing(!editing)}
                    style={{
                      color: '#2C698D',
                      fontSize: '14px',
                    }}
                  >
                    Edit
                  </a>
                </Grid.Column>
              </Grid>

            </Card.Content>
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