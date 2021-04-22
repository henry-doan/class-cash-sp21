import { Card, Grid, Button } from "semantic-ui-react";
import { RewardConsumer } from '../../providers/RewardProvider'
import { useState } from 'react'

const Reward = ({r, enrollmentId, deleteReward}) => {

  const handleDeletion = (e) => {
    e.preventDefault()
    deleteReward(enrollmentId, r.id)
    window.location.reload()
  }

  return(
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
  )
}

const ConnectedReward = (props) => (
  <RewardConsumer>
    { value => (
      <Reward {...props} {...value} />
    )}
  </RewardConsumer>
)

export default ConnectedReward;