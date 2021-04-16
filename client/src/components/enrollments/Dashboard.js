import MyPoints from './MyPoints'

const Dashboard = ({location}) => {
  const { classroomId } = location.state.classroomId
  const { enrollmentId } = location.state.enrollmentId

  return(
  <>
    <h1>Dashboard</h1>
    <MyPoints 
    classroomId={location.state.classroomId}
    enrollmentId={location.state.enrollmentId}
    />
  </>
  )
}
export default Dashboard;