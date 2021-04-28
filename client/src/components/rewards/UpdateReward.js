import { Form, Button } from 'semantic-ui-react';
import { useState } from 'react';
import { ClassroomRewardConsumer } from '../../providers/ClassroomRewardProvider';
import {withRouter} from 'react-router-dom';
const UpdateReward = ({id, name, desc, cost, updateClassroomReward, setEditing, classroom_id}) => {
  const [reward, setReward] = useState({name: name, desc: desc, cost: cost, classroom_id: classroom_id})
  
  const handleSubmit = (e) => {
    e.preventDefault();
    updateClassroomReward(id, classroom_id, reward)
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
      <Button type="submit" onClick={() => window.location.href = window.location.href}>Update</Button>
    </Form>
  )
}

const ConnectedUpdateReward = (props) => (
  <ClassroomRewardConsumer>
    {
      value => (
        <UpdateReward {...props} {...value} />
      )
    }
  </ClassroomRewardConsumer>
)
export default withRouter(ConnectedUpdateReward);