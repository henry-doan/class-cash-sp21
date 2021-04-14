import { Header, Button } from 'semantic-ui-react';
import Enrollment from './Enrollment'

const MyPoints = ({classroomId}) => {
  return(
    <>
      <Header>My Points</Header>
      <Enrollment classroomId={classroomId}/>
      <Button>Earn</Button>
      <Button>Spend</Button>
    </>
  )
}

export default MyPoints