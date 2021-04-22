import { Header, Button, Card } from 'semantic-ui-react';
import Enrollmentpoints from './Enrollmentpoints';
import { Link } from 'react-router-dom'


const MyPoints = ({classroomId, enrollmentId}) => {

  return(
    <>
     <Card style={{backgroundColor: "lightgrey"}}>
       
      <Header>My Points</Header>
      <Enrollmentpoints 
        classroomId={classroomId}
        enrollmentId={enrollmentId}
      />
     <Card.Content>
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
      </Card.Content>
      </Card>
    </>
  )
}

export default MyPoints