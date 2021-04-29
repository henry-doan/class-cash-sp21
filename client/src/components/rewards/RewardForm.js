import { Form, Button, Header, Divider, Container, Segment } from "semantic-ui-react";
import { useState } from 'react'
import { ClassroomRewardConsumer } from "../../providers/ClassroomRewardProvider";
import { GreenButton, LeftAlignDiv, SharedForm } from '../../styledComponents/SharedStyles';
const RewardForm = ({addClassroomReward, location}) => {
  const [classroomReward, setClassroomReward] = useState({name:"", desc: "", cost: ""})

  const handleSubmit = (e) => {
    e.preventDefault();
    addClassroomReward( location.state.classroomId, classroomReward)
    setClassroomReward({name:"", desc: "", cost: ""})
  }
  return(
    <>
    <Segment basic padded="very">
    <Header as='h1' style={{fontSize: '2.25rem'}}>Create Reward</Header>
    <p style={{fontSize: '1rem'}}>Create a reward for your class.</p>
    <Divider hidden />
    <Divider hidden />
    <SharedForm onSubmit={handleSubmit}>
        <LeftAlignDiv>
          <label>Name</label>
        </LeftAlignDiv>
      <Form.Input 
        placeholder='Reward Name'
        name='name'
        required
        onChange={(e, {value}) => setClassroomReward({...classroomReward, name: value})}
        value={classroomReward.name}
      />
        <LeftAlignDiv>
          <label>Description</label>
        </LeftAlignDiv>
      <Form.Input 
        placeholder='Reward Description'
        name='desc'
        required
        onChange={(e, {value}) => setClassroomReward({...classroomReward, desc: value})}
        value={classroomReward.desc}
      />
       <LeftAlignDiv>
          <label>Cost</label>
        </LeftAlignDiv>
      <Form.Input 
        placeholder='Reward Cost'
        name='cost'
        required
        onChange={(e, {value}) => setClassroomReward({...classroomReward, cost: value})}
        value={classroomReward.cost}
      />
      <GreenButton type="submit">Save</GreenButton>
      <GreenButton><a style={{color: 'white'}} href="javascript:history.back()"> Back to Admin Rewards</a></GreenButton>
    </SharedForm>
    </Segment>
    </>
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