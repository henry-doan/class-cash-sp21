import { Header, Button } from 'semantic-ui-react';
import EnrollmentClass from './EnrollmentClass';
import { Link } from 'react-router-dom'

const MyDashboardClassroom = ({classroomId, enrollmentId}) => {
  return(
    <>
      <Header>My Classroom</Header>
      <EnrollmentClass
        classroomId={classroomId}
        enrollmentId={enrollmentId}
      />
     
     
    </>
  )
}

export default MyDashboardClassroom