import MyPoints from './MyPoints'

const Dashboard = ({location}) => {
  const { classroomId } = location.state.classroomId

  return(
  <>
    <h1>Dashboard</h1>
    <MyPoints classroomId={location.state.classroomId}/>
  </>
  )
}
export default Dashboard;