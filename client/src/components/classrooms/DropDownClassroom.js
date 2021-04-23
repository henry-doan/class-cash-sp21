import { useState, useEffect, useReducer } from 'react'
import { Card, Button, Icon, Grid, Divider } from "semantic-ui-react";
import { Link, useParams } from 'react-router-dom';
import { ClassroomConsumer } from '../../providers/ClassroomProvider';
import axios from 'axios';
import { HoverButton } from '../../styledComponents/SharedStyles'
const DropDownClassroom = ({e}) => {
  const [classroom, setClassroom] = useState([])
  
useEffect( () => {
  axios.get(`/api/classrooms/${e.classroom_id}`)
    .then( res => setClassroom(res.data))
    .catch( err => console.log(err))
}, [])

const handleClick = () => {
  window.location.reload()
}

return(
  <Button style={{backgroundColor:"white", height:'auto', width:'auto'}} onClick={handleClick}>
    <Link  to={{
            pathname: `/Dashboard/${e.id}/${classroom.id}`,
            
            state: {
              classroomId: classroom.id,
              enrollmentId: e.id
            }
          }}>
  
    <HoverButton >
    <Card style={{color:"F5F5F5"}}  key={classroom.id}>
      <Card.Content style={{ height:'191px'}}>
        <Card.Header>
          <Divider hidden />
          <h1>{classroom.name}</h1>
        </Card.Header>
      </Card.Content>
      
        </Card>
        </HoverButton>
     
        </Link>
        </Button>
  
)
}

const ConnectedDropDownClassroom = (props) => (
  <ClassroomConsumer>
    { value => (
      <DropDownClassroom {...props} {...value} />
    )}
  </ClassroomConsumer>
)

export default ConnectedDropDownClassroom;

// 