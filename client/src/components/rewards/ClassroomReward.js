import { Card } from 'semantic-ui-react'

const ClassroomReward = ({c}) => (
  <Card>
    <Card.Content>
      <Card.Header>
        {c.name}
      </Card.Header>
      <Card.Description>
        {c.desc}
      </Card.Description>
      <Card.Meta>
        {c.cost}
      </Card.Meta>
    </Card.Content>
  </Card>
)

export default ClassroomReward