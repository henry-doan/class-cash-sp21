import { Card, Button } from 'semantic-ui-react'
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
    window.location.reload()
  }

  const rewardButton = () => {
    if(total >= c.cost){
      return(
        <Button onClick={handleSubmission}>
          Buy for {c.cost} points
        </Button>
      )
    }
    else{
      return(
        <Button>
          Not Enough Points
        </Button>
      )
    }
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
        {rewardButton()}
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