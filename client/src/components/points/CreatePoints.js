import { Header, Segment, Form, Button, Message, Icon, Grid, Divider, Container } from 'semantic-ui-react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { PointConsumer } from '../../providers/PointProvider'
import { Link } from 'react-router-dom'
import { SharedForm, LeftAlignDiv, GreenButton} from '../../styledComponents/SharedStyles'

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
          let opt = { key: u.id, text: u.name, value: e.id, image: {avatar: true, src: u.image } }
          options.push(opt)
        }
        }
      }
      return options
    }

  return(
  <>
  <Segment basic padded="very">
    <Header as='h1' style={{fontSize: '2.25rem'}}>Award Points</Header>
    <p style={{fontSize: '1rem'}}>Award points to students</p>
    <Divider hidden />
    <Divider hidden />
    <Container>
      <SharedForm onSubmit={handleSubmit}>
      <LeftAlignDiv>
        <label>Name</label>
      </LeftAlignDiv>
      <Form.Input
        required
        autoFocus
        name='name'
        value={point.name}
        placeholder='Enter Reason for Awarding Points'
        onChange={(e, { value }) => setPoint({ ...point, name: value })}
        />
        <LeftAlignDiv>
          <label>Description</label>
        </LeftAlignDiv>
        <Form.Input
        required
        autoFocus
        name='desc'
        value={point.desc}
        placeholder='Enter Description'
        onChange={(e, { value }) => setPoint({ ...point, desc: value })}
        />
        <LeftAlignDiv>
          <label>Point Value</label>
        </LeftAlignDiv>
        <Form.Input
        type='number'
        required
        autoFocus
        name='value'
        value={point.value}
        placeholder='Point Value'
        onChange={(e, { value }) => setPoint({ ...point, value: value })}
        />
        <LeftAlignDiv>
          <label>Student</label>
        </LeftAlignDiv>
        <Form.Select 
          inline
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
        <GreenButton type='submit'>Submit</GreenButton>
        <GreenButton >
          <a style={{color: 'white'}} href="javascript:history.back()"> Back to Dashboard</a>
        </GreenButton>
      </SharedForm>
    </Container>
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