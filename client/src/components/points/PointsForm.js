import { Form, Button } from "semantic-ui-react";
import { useState } from 'react'
import { PointConsumer } from "../../providers/PointProvider";


const PointsForm =  ({addPoint}) => {
  const [point, setPoint] = useState({name:"", desc: "", value: ""})

  const handleSubmit = (e) => {
    e.preventDefault();
    addPoint(point)
    setPoint({name:"", desc: "", value: ""})
  }

  <Form onSubmit={handleSubmit}>
  <Form.Input 
    label='Name'
    placeholder='Reason For Points'
    name='name'
    required
    onChange={(e) => setPoint({})}
    value={point.name}
  />
  <Form.Input 
    label='Description'
    placeholder='Point Description'
    name='desc'
    required
    onChange={(e) => setPoint({})}
    value={point.name}
  />
  <Form.Input 
    label='Point Value'
    placeholder='Value'
    name='value'
    required
    onChange={(e) => setPoint({})}
    value={point.name}
  />
  <Button type="submit">Save</Button>
</Form>

}


const ConnectedPointsForm = (props) => (
  <PointConsumer>
    {
      value => (
        <PointsForm {...props} {...value} />
      )
    }
  </PointConsumer>
)
export default ConnectedPointsForm;