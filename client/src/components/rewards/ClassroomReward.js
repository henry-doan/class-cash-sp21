import { Card, Button, Grid } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import { RewardConsumer } from '../../providers/RewardProvider'
import axios from 'axios'

const ClassroomReward = ({c, enrollmentId, addReward}) => {
  const [reward, setReward] = useState({name: c.name, desc: c.desc, cost: c.cost, enrollment_id: enrollmentId})
  const [point, setPoint] = useState({name: c.name, desc: c.desc, value: -c.cost, enrollment_id: enrollmentId})
  const [total, setTotal] = useState(0)

  useEffect( () => {
    axios.get(`/api/totalPoints/${enrollmentId}`)
      .then( res => {
        setTotal(res.data)
      })
      .catch( err => console.log(err))
  }, []) 

  const handleSubmission = (e) => {
    e.preventDefault()
    addReward(enrollmentId, reward, point)
    window.location.href = window.location.href
  }

  const rewardButton = () => {
    if(total >= c.cost){
      return(
        <a onClick={handleSubmission} pointing style={{
          color: '#2C698D',
          fontSize: '1rem',
        }}>
          Buy for {c.cost} points
        </a>
      )
    }
    else{
      return(
        <a style={{
          color: '#2C698D',
          fontSize: '1rem',
        }}>
          Insufficient Points
        </a>
      )
    }
  }

  return(
  <Card fluid>
    <Card.Content>
      <Card.Header style={{fontSize: '1.5rem'}}>
        {c.name}
      </Card.Header>
      <Card.Description style={{fontSize: '1rem', color: 'black'}}>
        {c.desc}
      </Card.Description>
      <br/>
      <Grid centered columns={2}>
        <Grid.Column width={11}>
          <Card.Meta style={{fontSize: '1rem', color: 'black'}}>
            {c.cost} points
          </Card.Meta>
        </Grid.Column>
        <Grid.Column width={5}>
          <Card.Meta textAlign='right'>
            {rewardButton()}
          </Card.Meta>
        </Grid.Column>
      </Grid>
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