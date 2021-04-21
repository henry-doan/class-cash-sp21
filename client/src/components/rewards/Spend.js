import { Header } from 'semantic-ui-react'
import ClassroomRewards from './ClassroomRewards'
import Enrollmentpoints from '../enrollments/Enrollmentpoints'

const Spend = ({location}) => {
  return(
  <>
    <Header>Spend Points</Header>
    <p>Spend Points on rewards</p>
    <p>My Points</p>
    <Enrollmentpoints 
      classroomId={location.state.classroomId}
      enrollmentId={location.state.enrollmentId}
    />
    <ClassroomRewards
      classroomId={location.state.classroomId}
      enrollmentId={location.state.enrollmentId}
    />
  </>
  )
}

export default Spend;