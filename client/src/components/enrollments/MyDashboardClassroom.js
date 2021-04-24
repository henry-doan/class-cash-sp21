import { Header, Button } from 'semantic-ui-react';
import EnrollmentClass from './EnrollmentClass';
import { Link } from 'react-router-dom'
import { DashboardSubHeader } from '../../styledComponents/DashboardStyles'

const MyDashboardClassroom = ({classroomId, enrollmentId}) => {
  return(
    <>
      <DashboardSubHeader>My Classroom</DashboardSubHeader>
      <EnrollmentClass
        classroomId={classroomId}
        enrollmentId={enrollmentId}
      />
     
     
    </>
  )
}

export default MyDashboardClassroom