import ViewClassroomsList from './ViewClassroomsList'
import { Divider, Header, Icon } from 'semantic-ui-react'
import { MyHeader } from '../../styledComponents/SharedStyles'

const ViewClassrooms = () => {
  return(
    <>
      <Divider hidden />
      <Divider hidden />
      <Divider horizontal>
        <Header as='h2'><Icon name='folder outline' />All Classrooms</Header>
      </Divider>
      <Divider hidden />
      <ViewClassroomsList />
    </>
  )
}

export default ViewClassrooms;