import ViewClassroomsList from './ViewClassroomsList'
import { Divider } from 'semantic-ui-react'
import { MyHeader } from '../../styledComponents/SharedStyles'

const ViewClassrooms = () => {
  return(
    <>
      <h1>All Classrooms</h1>
      <Divider hidden />
      <ViewClassroomsList />
    </>
  )
}

export default ViewClassrooms