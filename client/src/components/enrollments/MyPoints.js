import { Header, Button } from 'semantic-ui-react';
import Enrollmentpoints from './Enrollmentpoints';
import { Link } from 'react-router-dom'

const MyPoints = ({classroomId, enrollmentId}) => {
  return(
    <>
      <Header>My Points</Header>
      <Enrollmentpoints 
        classroomId={classroomId}
        enrollmentId={enrollmentId}
      />
      <Button>
        <Link to={{
          pathname: `/EarnPoints/${enrollmentId}`,
          state: {
            classroomId: classroomId,
            enrollmentId: enrollmentId
          }
        }}>
        Earn
        </Link>
      </Button>
      <Button>
      <Link to={{
          pathname: `/Spend/${classroomId}`,
          state: {
            classroomId: classroomId,
            enrollmentId: enrollmentId
          }
        }}>
        Spend
      </Link>
      </Button>
    </>
  )
}

export default MyPoints