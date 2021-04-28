import { Form, Button } from "semantic-ui-react";
import { useState } from 'react'
import { ClassroomRewardConsumer } from "../../providers/ClassroomRewardProvider";
import { GreenButton } from '../../styledComponents/SharedStyles';
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
      <GreenButton type="submit">Save</GreenButton>
      <GreenButton><a style={{color: 'white'}} href="javascript:history.back()"> Back to Admin Rewards</a></GreenButton>
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