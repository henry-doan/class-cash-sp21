import { Form, Button } from "semantic-ui-react";
import { useState } from 'react'
import { ClassroomRewardConsumer } from "../../providers/ClassroomRewardProvider";

const RewardForm = ({addClassroomReward, location}) => {
  const [classroomReward, setClassroomReward] = useState({name:"", desc: "", cost: ""})

  const handleSubmit = (e) => {
    e.preventDefault();
    addClassroomReward( location.state.classroomId, classroomReward)
    setClassroomReward({name:"", desc: "", cost: ""})
  }
  return(
    <Form onSubmit={handleSubmit}>
      <Form.Input 
        label='Reward Name'
        placeholder='Reward Name'
        name='name'
        required
        onChange={(e, {value}) => setClassroomReward({...classroomReward, name: value})}
        value={classroomReward.name}
      />
      <Form.Input 
        label='Reward Description'
        placeholder='Reward Description'
        name='desc'
        required
        onChange={(e, {value}) => setClassroomReward({...classroomReward, desc: value})}
        value={classroomReward.desc}
      />
      <Form.Input 
        label='Reward Cost'
        placeholder='Reward Cost'
        name='cost'
        required
        onChange={(e, {value}) => setClassroomReward({...classroomReward, cost: value})}
        value={classroomReward.cost}
      />
      <Button type="submit">Save</Button>
    </Form>
  )
}

const ConnectedRewardForm = (props) => (
  <ClassroomRewardConsumer>
    {
      value => (
        <RewardForm {...props} {...value} />
      )
    }
  </ClassroomRewardConsumer>
)
export default ConnectedRewardForm;