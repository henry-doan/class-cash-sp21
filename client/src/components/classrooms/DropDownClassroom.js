import { useState, useEffect, useReducer } from 'react'
import { Card, Button, Icon, Grid, Divider, Container } from "semantic-ui-react";
import { Link, useParams } from 'react-router-dom';
import { ClassroomConsumer } from '../../providers/ClassroomProvider';
import axios from 'axios';
import { HoverButton } from '../../styledComponents/SharedStyles'
import { NavCard, NavH1 } from '../../styledComponents/NavStyles'

const DropDownClassroom = ({e}) => {
  const [classroom, setClassroom] = useState([])
  
useEffect( () => {
  axios.get(`/api/classrooms/${e.classroom_id}`)
    .then( res => setClassroom(res.data))
    .catch( err => console.log(err))
}, [])

const handleClick = () => {
  window.location.href = window.location.href
}

return(
  <Grid.Column>
    <Container style={{backgroundColor:"white", height:'auto', width:'auto'}} onClick={handleClick}>
      <Link  to={{
              pathname: `/Dashboard/${e.id}/${classroom.id}`,
            }}
            >
    
      <HoverButton >
      <NavCard style={{backgroundColor:"#F5F5F5"}}  key={classroom.id}>
        <Card.Content>
          <Card.Header>
            <Divider hidden />
            <NavH1 style={{color: '#304540'}}>{classroom.name}</NavH1>
          </Card.Header>
        </Card.Content>
        
      </NavCard>
          </HoverButton>
      
          </Link>
          </Container>
  </Grid.Column>
  
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