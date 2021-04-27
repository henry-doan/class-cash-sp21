import MyPoints from './MyPoints';
import MyRewards from '../rewards/MyRewards';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Button, Card, Divider, Grid, GridColumn, GridRow, Segment, Container } from 'semantic-ui-react';
import {Link, useParams} from 'react-router-dom';
import MyDashboardClassroom from './MyDashboardClassroom';
import MyEarned from '../points/MyEarned';
import { ClassroomConsumer } from '../../providers/ClassroomProvider';
import { GreenButton } from '../../styledComponents/SharedStyles'

const Dashboard = ({location, user, match}) => {
  const isAdmin = user.isAdmin
  const {id} = useParams()
  return(
  <>
       <Grid stackable doubled>
          {
          isAdmin ? 
          <>
          <Grid.Column width={3}>
            <GreenButton style={{width: '170px'}}>
              <Link 
              style={{color: 'white'}}
              to={{
                pathname:'/AdminRewards',
                state: {
                  enrollmentId: id,
                  classroomId: match.params.classroom_id,
                } }}
              > View All Rewards</Link>
              </GreenButton>
            </Grid.Column>
            <Grid.Column width={3}>
            <GreenButton style={{width: '170px'}}>
            <Link 
            style={{color: 'white'}}
            to={{
              pathname:`/CreatePoints/${match.params.enrollment_id}/${match.params.classroom_id}`,
              }}
            > Award Points</Link>
          </GreenButton></Grid.Column>
          </>
          :'' }
      </Grid>
    <Grid columns={2} relaxed='very'>
      <Grid.Row>
        <Grid.Column width={5}>
          <MyPoints 
            classroomId={match.params.classroom_id}
            enrollmentId={match.params.enrollment_id}
            />
        </Grid.Column>
        <Grid.Column width={11}>
          <Link to={{
                  pathname: `/MyClassroom`,
                  state: {
                    enrollmentId: id,
                    classroomId: match.params.classroom_id
                  }
                }}>
          <MyDashboardClassroom
            classroomId={match.params.classroom_id}
            enrollmentId={match.params.enrollment_id}
          />
          </Link>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={6}>
            <MyRewards
              enrollmentId={match.params.enrollment_id}
              /> 
        </Grid.Column>
        <Grid.Column width={10}>
          <Segment basic >
            <MyEarned 
              enrollmentId={match.params.enrollment_id}
              />
            </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <Divider hidden vertical />
  </>
  )
}
const ConnectedDashboard = (props) =>(
  <ClassroomConsumer>
    {
      value => (
        <Dashboard {...props} {...value} />
      )
    }
  </ClassroomConsumer>
)

const AuthconnectedDashboard = (props) => (
  <AuthConsumer>
    {
      value => (
        <ConnectedDashboard {...props} {...value} />
      )
    }
  </AuthConsumer>
)
export default AuthconnectedDashboard;