import { Card, Button } from 'semantic-ui-react'

const ClassroomReward = ({c}) => (
  <Card fluid>
    <Card.Content>
      <Card.Header>
        {c.name}
      </Card.Header>
      <Card.Description>
        {c.desc}
      </Card.Description>
      <br/>
      <Card.Meta>
        {c.cost} points
      </Card.Meta>
      <Card.Meta textAlign='right'>
        <Button>
          Buy for {c.cost} points
        </Button>
      </Card.Meta>
    </Card.Content>
  </Card>
)

export default ClassroomReward