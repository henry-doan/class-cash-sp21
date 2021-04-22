import { Card, Button } from 'semantic-ui-react'
import { useState } from 'react'
import { RewardConsumer } from '../../providers/RewardProvider'

const ClassroomReward = ({c, enrollmentId, addReward}) => {
  const [reward, setReward] = useState({name: c.name, desc: c.desc, cost: c.cost, enrollment_id: enrollmentId})
  const [point, setPoint] = useState({name: c.name, desc: c.desc, value: -c.cost, enrollment_id: enrollmentId})

  const handleSubmission = (e) => {
    e.preventDefault()
    addReward(enrollmentId, reward, point)
    window.location.reload()
  }

  return(
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
        <Button onClick={handleSubmission}>
          Buy for {c.cost} points
        </Button>
      </Card.Meta>
    </Card.Content>
  </Card>
  )
}

const ConnectedClassroomReward = (props) => (
  <RewardConsumer>
    { value => (
      <ClassroomReward {...props} {...value} />
    )}
  </RewardConsumer>
)

export default ConnectedClassroomReward