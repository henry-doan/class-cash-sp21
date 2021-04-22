import { Button } from "semantic-ui-react";
import { Link, useParams } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { AuthConsumer } from "../../providers/AuthProvider";
import { withRouter} from 'react-router-dom';
import { ClassroomConsumer } from "../../providers/ClassroomProvider";

const DashboardLink = ({location, e, match}) => {
  const [enrollment, setEnrollment] = useState({})
  const [classroom, setClassroom] = useState({})
  // const [getUserClassroom, setGetUserClassroom] = useState([])
  useEffect( () => {
    
    axios.get(`/api/classrooms/${location.pathname.split("/").pop()}`)
      .then( res => setClassroom(res.data))
      .catch( err => console.log(err))
      // axios.get(`/api/classrooms/${location.state.classroomId}`)
      // .then( res => setClassroom(res.data))
      // .catch( err => console.log(err))
  }, [])
  
  
  const handleClick = () => {
    window.location.reload()
  }

    return (
      <Button onClick={handleClick} >
      <Link  to={{
        pathname: `/Dashboard/${location.state.enrollmentId}/${classroom.id}`,
        
        state: {
          classroomId: classroom.id,
          enrollmentId: enrollment.id
        }
      }}>
      <h4>Dashboard</h4>
      </Link>
      </Button>
      
    )
}

    const ConnectedDashboardLink = (props) => (
      <AuthConsumer>
        { value => (
          <DashboardLink {...props} {...value} />
        )}
      </AuthConsumer>
    )


    const ClassroomConnectedDashboardLink = (props) => (
      <ClassroomConsumer>
        { value => (
          <ConnectedDashboardLink {...props} {...value} />
        )}
      </ClassroomConsumer>
    )
    
    export default withRouter(ClassroomConnectedDashboardLink);