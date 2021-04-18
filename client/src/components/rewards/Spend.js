import { Header } from 'semantic-ui-react'
import ClassroomRewards from './ClassroomRewards'

const Spend = ({location}) => {
  return(
  <>
    <Header>Spend Points</Header>
    <p>Spend Points on rewards</p>
    <ClassroomRewards
      classroomId={location.state.classroomId}
      enrollmentId={location.state.enrollmentId}
    />
  </>
  )
}
export default Spend;