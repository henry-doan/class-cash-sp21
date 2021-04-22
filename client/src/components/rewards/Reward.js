import { Button, Card, Grid } from "semantic-ui-react";
import { AuthConsumer } from '../../providers/AuthProvider';

const Reward = ({r, user}) => {
const isAdmin = user.isAdmin
  return(
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
            {r.cost} <Button floated='right'>Edit</Button>
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

export default ConnectedReward;