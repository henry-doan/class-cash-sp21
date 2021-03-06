import { useState, useEffect } from 'react';
import axios from 'axios'
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Grid, Image, Button, Header, Container, Divider, Segment, Card, Icon } from 'semantic-ui-react';
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
        <Grid style={{
          margin: '0 auto'
        }}>
          <Grid.Row>
            <Grid.Column width={8}>
              <Image style={{borderRadius: '50%', height: '200px'}} src={user.image || defaultImage} />
            </Grid.Column>
            <Grid.Column width={8}>
              <Divider hidden />
              <h3>Name: {user.name}</h3>
              <h3>Email: {user.email}</h3>
              <GreenButton onClick={() => setEditing(!editing)}>
                Edit Profile
              </GreenButton>
            </Grid.Column>
          </Grid.Row>
        </Grid>
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
          <GreenButton type="submit">Update</GreenButton>
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
    <Container textAlign='center'>
      <Divider hidden />
      <Divider horizontal><Header as='h2'><Icon name='user' /> Profile</Header></Divider>
      <Grid>
        <Grid.Row>
          { editing ? editView() : profileView() }
        </Grid.Row>
      </Grid>
      <Divider hidden />
      <Divider horizontal><Header as='h2'><Icon name='book' />Current Enrollments</Header></Divider><Divider hidden />
      <Card.Group centered>
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