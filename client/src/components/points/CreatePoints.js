import { Header, Segment, Form, Button, Message, Icon, Grid } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { PointConsumer } from '../../providers/PointProvider'
import { Link } from 'react-router-dom'

const CreatePoints = ({match, addPoint}) => {
  const [point, setPoint] = useState({ name: '', desc: '', value: 0, enrollment_id: 0 })
  const [classroomUsers, setClassroomUsers] = useState([])
  const [enrollments, setEnrollments] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    addPoint(point.enrollment_id, point)
    setPoint({ name: '', desc: '', value: 0, enrollment_id: 0 })
  }

  useEffect( () => {
    axios.get(`/api/classroomUsers/${match.params.classroom_id}`)
      .then( res => setClassroomUsers(res.data))
      .catch( err => console.log(err))
    axios.get(`/api/classrooms/${match.params.classroom_id}/enrollments`)
      .then( res => {
        setEnrollments(res.data)
      })
      .catch( err => console.log(err))
  }, [])

  const createOptions = () => {
    let options = []
    for(let u of classroomUsers){
      for(let e of enrollments){
        if (u.id === e.user_id) {
          let opt = { key: u.id, text: u.name, value: e.id }
          options.push(opt)
        }
        }
      }
      return options
    }

  return(
  <>
    
    <Segment basic>
    <Header as='h1'>Award Points</Header>
    <p>Award points to students</p>
    
    <Form style={{width: "50%"}} onSubmit={handleSubmit}>
    <Form.Input
      label="Name"
      required
      autoFocus
      name='name'
      value={point.name}
      placeholder='Enter Reason for Awarding Points'
      onChange={(e, { value }) => setPoint({ ...point, name: value })}
      />
      <Form.Input
      label="Description"
      required
      autoFocus
      name='desc'
      value={point.desc}
      placeholder='Enter Description'
      onChange={(e, { value }) => setPoint({ ...point, desc: value })}
      />
      <Form.Input
      type='number'
      label="Point Value"
      required
      autoFocus
      name='value'
      value={point.value}
      placeholder='Point Value'
      onChange={(e, { value }) => setPoint({ ...point, value: value })}
      />
      <Form.Select 
        label="Student"
        options={createOptions()}
        placeholder='Choose Student'
        required
        name='enrollment_id'
        value={point.enrollment_id}
        onChange={(e, { value }) => setPoint({ ...point, enrollment_id: value })}
      />
      
      <Message 
        success
        header="Points Awarded"
        content="Points have been awarded to the student"
      />
      <Segment basic>
        
        <Button style={{color: '#ffffff', backgroundColor: '#1CB993' }} floated='left' type='submit'>Submit</Button>
        <br />
        <br />
        {/* <Button style={{backgroundColor: '#1CB993' }}><Link style={{color: 'white'}}to='/ViewClassrooms'>Show All Classrooms</Link></Button> */}
      </Segment>
    </Form>
  </Segment>
  </>
  )
}

const ConnectedCreatePoints = (props) =>(
  <PointConsumer>
    {
      value => (
        <CreatePoints {...props} {...value} />
      )
    }
  </PointConsumer>
)
export default ConnectedCreatePoints;