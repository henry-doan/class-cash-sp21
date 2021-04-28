import { Card, Grid, Button } from "semantic-ui-react";
import { RewardConsumer } from '../../providers/RewardProvider';
import { useState } from 'react';
import UpdateReward from './UpdateReward';
import { MyHeader } from '../../styledComponents/SharedStyles'

const Reward = ({r, enrollmentId, updateReward, user}) => {
  const [reward, setReward] = useState({name: r.name, cost: r.cost, desc: r.desc, redeemed: true, enrollment_id: r.enrollment_id})
  const [editing, setEditing] = useState(false)

  const handleRedeem = (e) => {
    e.preventDefault()
    updateReward(r.id, enrollmentId, reward)
    window.location.href = window.location.href
  }

  return(
    <>
{   !r.redeemed ? 
  <>
      <Grid.Row>
        <Grid.Column>
          <Card style={{width: '396px', height: '147px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.161522)', borderRadius: '16px'}}>
            <Card.Content>
              <MyHeader>
                {r.name}
              </MyHeader>
              <Card.Description style={{fontSize: '1rem', color: 'black'}}>
                {r.desc}
              </Card.Description>
              <br/>
              <Grid centered columns={2}>
                <Grid.Column float='left' width={11}>
                  <Card.Meta style={{fontSize: '1rem', color: 'black'}}>
                    {r.cost}
                  </Card.Meta>
                </Grid.Column>
                <Grid.Column float='right' width={5}>
                  <a onClick={handleRedeem} pointing
                    style={{
                      color: '#2C698D',
                      fontSize: '1rem',
                    }}
                  >
                    Use Reward
                  </a>
                </Grid.Column>
              </Grid>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
  </> 
  : "" }
  </>
  )
}

const ConnectedReward = (props) => (
  <RewardConsumer>
    {
      value => (
        <Reward {...props} {...value} />
      )
    }
  </RewardConsumer>
)

export default ConnectedReward;