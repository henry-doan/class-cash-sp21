import { useState, useEffect } from 'react';
import axios from 'axios'
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Grid, Image, Button, Header, Container, Divider, Segment, Card } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import {GreenButton, SharedForm, LeftAlignDiv} from '../../styledComponents/SharedStyles';
import Classroom from '../classrooms/Classroom'

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';
const Profile = ({ user, updateUser }) => {
  const [editing, setEditing] = useState(false)
  const [formVals, setFormVals] = useState({ name: '', email: '', file: '' })
  const [userEnrollments, setUserEnrollments] = useState([])

  useEffect ( () => {
    const { name, email, image } = user
    setFormVals({ name, email, image })
    axios.get(`/api/userEnrollments/${user.id}`)
      .then( res => setUserEnrollments(res.data))
      .catch( err => console.log(err))
  }, [])

  const onDrop = (files) => {
    setFormVals({ ...formVals, file: files[0]})
  }

  const renderUserEnrollments = () => {
    return userEnrollments.map( e => (
      <Classroom e={e}/>
    ))
  }

  const profileView = () => {
    return(
      <>
        <Grid.Row>
          <Container>
            <Image style={{borderRadius: '50%', height: '200px'}} src={user.image || defaultImage} />
          </Container>
        </Grid.Row>
        <Grid.Row >
          <Divider hidden />
          <Header>{user.name}</Header>
          <Header>{user.email}</Header>
          <GreenButton onClick={() => setEditing(!editing)}>
            Edit Profile
          </GreenButton>
        </Grid.Row>
      </>
    )
  }
  const editView = () => {
    return(
      <SharedForm onSubmit={handleSubmit}>
        <Grid.Column width={4}>
          <Dropzone
            onDrop={onDrop}
            multiple={false}
          >
            {({ getRootProps, getInputProps, isDragActive }) => {
              return (
                <div
                  {...getRootProps()}
                  style={styles.dropzone}
                >
                  <input {...getInputProps()} /> 
                  {
                    isDragActive ?
                    <p>File grabbed</p>
                    : <p>Drop File Here</p>
                  }
                </div>
              )
            }}
          </Dropzone>
          <Divider hidden />
        </Grid.Column>
        <Grid.Column width={8}>
          <LeftAlignDiv>
            <label>Name</label>
          </LeftAlignDiv>
          <Form.Input
            name="name"
            value={formVals.name}
            required
            onChange={(e, inputAttr) => setFormVals({ ...formVals, name: inputAttr.value})}
          />
          <LeftAlignDiv>
            <label>Email</label>
          </LeftAlignDiv>
          <Form.Input
            name="email"
            value={formVals.email}
            required
            onChange={(e, inputAttr) => setFormVals({ ...formVals, email: inputAttr.value})}
          />
          <Button type='submit'>Update</Button>
          <GreenButton onClick={() => setEditing(!editing)}>
            Cancel
          </GreenButton>
        </Grid.Column>
      </SharedForm>
    )
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(user.id, formVals)
    setEditing(false)
    setFormVals({...formVals, file: "" })
  }
  return (
    <Container>
      <Grid>
        <Divider hidden />
        <h1>Profile</h1>
        <Grid.Row>
          { editing ? editView() : profileView() }
        </Grid.Row>
      </Grid>
      <Divider hidden />
      <Divider />
      <h2>Current Enrollments</h2>
      <Card.Group>
        { renderUserEnrollments() }
      </Card.Group>
    </Container>
  )
}
const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}
const ConnectedProfile = (props) => (
  <AuthConsumer>
    { auth => 
      <Profile { ...props } { ...auth } />
    }
  </AuthConsumer>
)
export default ConnectedProfile;