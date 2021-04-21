import MyPoints from './MyPoints';
import MyRewards from '../rewards/MyRewards';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Button, Divider, Grid, GridColumn, Segment } from 'semantic-ui-react';
import {Link, useParams} from 'react-router-dom';
import MyDashboardClassroom from './MyDashboardClassroom';
import MyEarned from '../points/MyEarned';
const Dashboard = ({location, user, match}) => {
  const isAdmin = user.isAdmin
  const {id} = useParams()
  return(
  <>
       <Grid>
          {
          isAdmin ? 
          <>
          <Grid.Column floated='left' width={4}>
            <Button size='large' style={{ backgroundColor: '#1CB993' }}>
              <Link 
              style={{color: 'white'}}
              to={{
                pathname:'/AdminRewards',
                state: {
                  enrollmentId: id,
                  classroomId: match.params.classroom_id,
                } }}
              > Admin Rewards</Link>
            </Button></Grid.Column>
            <Grid.Column floated='right' width={4}>
            <Button size='large' style={{ backgroundColor: '#1CB993' }}>
            <Link 
            style={{color: 'white'}}
            to={{
              pathname:`/CreatePoints/${match.params.enrollment_id}/${match.params.classroom_id}`,
              }}
            > Admin Award Points</Link>
          </Button></Grid.Column>
          </>
          :'' }
      </Grid>
  <Segment>
    <Grid columns={2} relaxed='very'>
      <Grid.Column>
        <Segment basic>
          <MyPoints 
            classroomId={match.params.classroom_id}
            enrollmentId={match.params.enrollment_id}
            />
          <br />
          <MyRewards
            enrollmentId={match.params.enrollment_id}
            />
        </Segment>  
      </Grid.Column>
      <Grid.Column>
        <Segment basic >
          <MyDashboardClassroom
            classroomId={match.params.classroom_id}
            enrollmentId={match.params.enrollment_id}
          />
         <br />
         <br />
          <MyEarned 
            enrollmentId={match.params.enrollment_id}
          />
          </Segment>
       </Grid.Column>
    </Grid>
    <Divider hidden vertical />
  </Segment>
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