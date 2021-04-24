import { Header, Button, Card, Grid } from 'semantic-ui-react';
import Enrollmentpoints from './Enrollmentpoints';
import { Link } from 'react-router-dom'
import { MyPointsContainer, DashboardSubHeader } from '../../styledComponents/DashboardStyles'

const MyPoints = ({classroomId, enrollmentId}) => {

  return(
    <>
      <MyPointsContainer>
      <DashboardSubHeader>My Points</DashboardSubHeader>
        <Enrollmentpoints 
          classroomId={classroomId}
          enrollmentId={enrollmentId}
        />
        <Grid columns={2} centered>
          <Grid.Column width={4} floated='left'>
            <Link to={{
              pathname: `/EarnPoints/${enrollmentId}/${classroomId}`,
              state: {
                classroomId: classroomId,
                enrollmentId: enrollmentId
              }
              }}
              style={{color: 'black'}} 
            >
              <Button style={{backgroundColor: 'white', borderRadius: '18px', width: '129px', fontWeight: 'normal'}}>
              Earn
              </Button>
            </Link>
          </Grid.Column>
          <Grid.Column width={8} floated='right'>
            <Link to={{
                pathname: `/Spend/${enrollmentId}/${classroomId}`,
                state: {
                  classroomId: classroomId,
                  enrollmentId: enrollmentId
                }
              }}
              style={{color: 'black'}}  
            >
              <Button style={{backgroundColor: 'white', borderRadius: '18px', width: '129px', fontWeight: 'normal'}}>
              
                Spend
              </Button>
            </Link>
          </Grid.Column>
        </Grid>
      </MyPointsContainer>
    </>
  )
}

export default MyPoints