import MyPoints from './MyPoints'

const Dashboard = ({location}) => {
  const { classroomId, enrollmentId } = location.state.classroomId

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