import MyPoints from './MyPoints';
import MyRewards from '../rewards/MyRewards';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Button, Divider, Grid, Segment } from 'semantic-ui-react';
import {Link, useParams} from 'react-router-dom';
import MyDashboardClassroom from './MyDashboardClassroom';
import MyEarned from '../points/MyEarned';

const Dashboard = ({location, user, match}) => {
  const isAdmin = user.isAdmin
  const {id} = useParams()

  return(
  <>
   
      <Grid columns={2} relaxed='right'>
       
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
                  enrollmentId: id,
                  
                } }}
              > Admin Rewards</Link>
            </Button>
          :'' }</Segment>
        </Grid.Column>
        
      </Grid>
   
       <Segment basic position="right">
          <MyDashboardClassroom
            classroomId={match.params.classroom_id}
            enrollmentId={match.params.enrollment_id}
          />
          <MyEarned 
          enrollmentId={match.params.enrollment_id}
          />
        </Segment>
      <Segment basic>
        <MyPoints 
          classroomId={match.params.classroom_id}
          enrollmentId={match.params.enrollment_id}
       />
    
         <MyRewards
          enrollmentId={match.params.enrollment_id}
        />
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