import { Grid, Header } from 'semantic-ui-react'
import ClassroomRewards from './ClassroomRewards'
import Enrollmentpoints from '../enrollments/Enrollmentpoints'

const Spend = ({location}) => {
  return(
  <>
  <Grid>
    <Grid.Column style={{width: "215px"}}>
    <Header>Spend Points</Header>
    <p>Spend Points on rewards</p>
    </Grid.Column>
    <Grid.Column floated="right" >
    <p>My Points</p>
    
    <Enrollmentpoints 
      classroomId={location.state.classroomId}
      enrollmentId={location.state.enrollmentId}
    />
   </Grid.Column>
   
    <ClassroomRewards
      classroomId={location.state.classroomId}
      enrollmentId={location.state.enrollmentId}
    />
    
    </Grid>
  </>
  )
}

export default Spend;