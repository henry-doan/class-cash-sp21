import { Form, Button } from "semantic-ui-react";
import { useState } from 'react'
import { RewardConsumer } from "../../providers/RewardProvider";

const RewardForm = ({addReward}) => {
  const [reward, setReward] = useState({name:"", desc: "", cost: ""})

  const handleSubmit = (e) => {
    e.preventDefault();
    addReward(reward)
    setReward({name:"", desc: "", cost: ""})
  }
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input 
        label='Reward Name'
        placeholder='Reward Name'
        name='name'
        required
        onChange={(e) => setReward({})}
        value={reward.name}
      />
      <Form.Input 
        label='Reward Description'
        placeholder='Reward Description'
        name='desc'
        required
        onChange={(e) => setReward({})}
        value={reward.name}
      />
      <Form.Input 
        label='Reward Cost'
        placeholder='Reward Cost'
        name='cost'
        required
        onChange={(e) => setReward({})}
        value={reward.name}
      />
      <Button type="submit">Save</Button>
    </Form>
  )
}

const ConnectedRewardForm = (props) => (
  <RewardConsumer>
    {
      value => (
        <RewardForm {...props} {...value} />
      )
    }
  </RewardConsumer>
)
export default ConnectedRewardForm;