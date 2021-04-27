import { Grid, Header, Divider } from 'semantic-ui-react'
import ClassroomRewards from './ClassroomRewards'
import SpendPoints from '../points/SpendPoints'
import { GreenButton } from '../../styledComponents/SharedStyles'
import DashboardLink from '../classrooms/DashboardLink'

const Spend = ({location}) => {
  return(
  <>
  <Grid columns={2}>
    <Grid.Column floated='left' width={13}>
      <GreenButton >
        <a style={{color: 'white'}} href="javascript:history.back()">Back to Dashboard</a>
      </GreenButton>
      <Header style={{fontSize: "1.5rem"}}>Spend Points</Header>
      <p style={{fontSize: "1.125rem"}}>Spend Points on rewards</p>
    </Grid.Column>
   
    <Grid.Column floated="right" width={3}>
    <br />
    <br/>
    <br />
    <p style={{fontSize: '1rem', color: '#818181'}}>My Points</p>
    <SpendPoints 
      classroomId={location.state.classroomId}
      enrollmentId={location.state.enrollmentId}
    />
   </Grid.Column>
   </Grid>
   
    <ClassroomRewards
      classroomId={location.state.classroomId}
      enrollmentId={location.state.enrollmentId}
    />
    
  </>
  )
}

export default Spend;