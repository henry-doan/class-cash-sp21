import { useState } from "react";
import { Button, Card, Grid } from "semantic-ui-react";
import { AuthConsumer } from '../../providers/AuthProvider';
import { ClassroomRewardConsumer } from "../../providers/ClassroomRewardProvider";

const Reward = ({r, user, updateClassroomReward}) => {
const isAdmin = user.isAdmin
const [editing, setEditing] = useState(false)
  return(
    <> {
      editing? <h1>Test</h1> :
    <>
    { isAdmin? 
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
            {r.cost} <Button floated='right' onClick={ ()=> setEditing(!editing)}>Edit</Button>
          </Card.Meta>
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
      </Card>
    </Grid.Column>
  </Grid.Row>
}</>}</>
  )}

const ConnectedReward = (props) => (
  <ClassroomRewardConsumer>
    {
      value => (
        <Reward {...props} {...value} />
      )
    }
  </ClassroomRewardConsumer>
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