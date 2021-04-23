import { Card, Grid, Button } from "semantic-ui-react";
import { RewardConsumer } from '../../providers/RewardProvider'
import { AuthConsumer } from '../../providers/AuthProvider';
import { useState } from 'react';
import UpdateReward from './UpdateReward';

const Reward = ({r, enrollmentId, deleteReward, user}) => {
  const isAdmin = user.isAdmin
  const [editing, setEditing] = useState(false)
  const handleDeletion = (e) => {
    e.preventDefault()
    deleteReward(enrollmentId, r.id)
    window.location.reload()
  }

  return(
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
            <Button onClick={handleDeletion}>
              Use Reward
            </Button>
          </Card>
        </Grid.Column>
      </Grid.Row>
}</>
}
</>)
}

const ConnectedReward = (props) => (
  <RewardConsumer>
    { value => (
      <Reward {...props} {...value} />
    )}
  </RewardConsumer>
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
