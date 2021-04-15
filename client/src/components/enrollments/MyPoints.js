import { Header, Button } from 'semantic-ui-react';
import Enrollment from './Enrollment'

const MyPoints = ({classroomId, enrollmentId}) => {
  return(
    <>
      <Header>My Points</Header>
      <Enrollment 
        classroomId={classroomId}
        enrollmentId={enrollmentId}
      />
      <Button>Earn</Button>
      <Button>Spend</Button>
    </>
  )
}

export default MyPoints