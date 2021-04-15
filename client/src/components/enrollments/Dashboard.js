import axios from "axios";
import { useEffect, useState } from "react";

// axios.get(`/api/classrooms/${match.params.id}/enrollments`)

const Dashboard = ({ id }) => {
  const [enrollments, setenrollments] = useState([])
  useEffect( () => {
    axios.get(`/api/classrooms/${id}/enrollments`)
      .then( res => setenrollments(res.data))
      .catch( err => console.log(err))
  },[])
  return(
    <>
      
      {enrollments.length > 0 ?
      <>
        {enrollments.map( d =>
          <>
            <p>Points:{d.total_points}</p>
            <p>User:{d.user_id}</p>
          </>
          )}
      </>
    : <p>No Points</p>}
    </>
  )
}

export default Dashboard;