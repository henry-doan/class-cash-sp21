import { Form, Button } from 'semantic-ui-react';
import { useState } from 'react';
import { RewardConsumer } from '../../providers/RewardProvider';

const UpdateReward = ({id, name, desc, cost, UpdateReward, setEditing}) => {
  const [reward, setReward] = useState({name: name, desc: desc, cost: cost})
  const handleSubmit = (e) => {
    e.preventDefault();
    UpdateReward(id, reward)
    setEditing(false)
  }

  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input 
        label="Reward Name"
        placeholder="Reward Name"
        name="name"
        required
        onChange={(e) => setReward({name: e.target.value})}
        value={reward.name}
      />
      <Form.Input 
        label="Reward Description"
        placeholder="Reward Description"
        name="desc"
        required
        onChange={(e) => setReward({desc: e.target.value})}
        value={reward.desc}
      />
      <Form.Input 
        label="Reward Cost"
        placeholder="Reward Cost"
        name="cost"
        required
        onChange={(e) => setReward({cost: e.target.value})}
        value={reward.cost}
      />
      <Button type="submit">Update</Button>
    </Form>
  )
}

const ConnectedUpdateReward = (props) => (
  <RewardConsumer>
    {
      value => (
        <UpdateReward {...props} {...value} />
      )
    }
  </RewardConsumer>
)
export default ConnectedUpdateReward;