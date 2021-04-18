import MyPoints from './MyPoints';
import MyRewards from '../rewards/MyRewards';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Button, Grid, Segment } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const Dashboard = ({location, user}) => {
  const isAdmin = user.isAdmin
  return(
  <>
    <Grid>
      <Grid.Column floated='left' width={5}>
        <Segment basic>
        <h1>Dashboard</h1></Segment>
      </Grid.Column>
      <Grid.Column floated='right' width={4}>
        <Segment basic>
        {
        isAdmin ? 
          <Button size='large' style={{ backgroundColor: '#1CB993' }}>
            <Link 
            style={{color: 'white'}}
            to={{
              pathname:'/AdminRewards',
              state: {
                enrollmentId: location.state.enrollmentId,
                
              } }}
            > Admin Rewards</Link>
          </Button>
        :'' }</Segment>
      </Grid.Column>
    </Grid>
    <Segment basic>
    <MyPoints 
      classroomId={location.state.classroomId}
      enrollmentId={location.state.enrollmentId}
    />
    <MyRewards
      enrollmentId={location.state.enrollmentId}
    /></Segment>
  </>
  )
}

const connectedDashboard = (props) =>(
  <AuthConsumer>
    {
      value => (
        <Dashboard {...props} {...value} />
      )
    }
  </AuthConsumer>
)
export default connectedDashboard;