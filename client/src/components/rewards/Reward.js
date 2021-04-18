import { Card, Grid } from "semantic-ui-react";

const Reward = ({r}) => (
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
)

export default Reward;