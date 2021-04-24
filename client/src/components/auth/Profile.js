import { useState, useEffect } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Form, Grid, Image, Button, Header, Container } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import {GreenButton} from '../../styledComponents/SharedStyles';

const defaultImage = 'https://d30y9cdsu7xlg0.cloudfront.net/png/15724-200.png';
const Profile = ({ user, updateUser }) => {
  const [editing, setEditing] = useState(false)
  const [formVals, setFormVals] = useState({ name: '', email: '', file: '' })
  useEffect ( () => {
    const { name, email, image } = user
    setFormVals({ name, email, image })
  }, [])
  const onDrop = (files) => {
    setFormVals({ ...formVals, file: files[0]})
  }
  const profileView = () => {
    return(
      <>
        <Grid.Column width={4}>
          <Image style={{borderRadius: '50%'}} src={user.image || defaultImage} />
        </Grid.Column>
        <Grid.Column width={12}>
          <Header>{user.name}</Header>
          <Header>{user.email}</Header>
        </Grid.Column>
      </>
    )
  }
  const editView = () => {
    return(
      <Form onSubmit={handleSubmit}>
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
                    : <p>Drop Files here</p>
                  }
                </div>
              )
            }}
          </Dropzone>
        </Grid.Column>
        <Grid.Column width={10}>
          <Form.Input
            label="Name"
            name="name"
            value={formVals.name}
            required
            onChange={(e, inputAttr) => setFormVals({ ...formVals, name: inputAttr.value})}
          />
          <Form.Input
            label="Email"
            name="email"
            value={formVals.email}
            required
            onChange={(e, inputAttr) => setFormVals({ ...formVals, email: inputAttr.value})}
          />
          <Button>Update</Button>
        </Grid.Column>
      </Form>
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
        <Grid.Row>
          { editing ? editView() : profileView() }
          <Grid.Column>
            <GreenButton onClick={() => setEditing(!editing)}>
              { editing ? 'Cancel' : 'Edit'}
            </GreenButton>
          </Grid.Column>
        </Grid.Row>
      </Grid>
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