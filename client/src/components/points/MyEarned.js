import { PointConsumer } from '../../providers/PointProvider'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Earn from './Earn'
import { Card, List, Header, Grid } from 'semantic-ui-react'
import { MyHeader } from '../../styledComponents/SharedStyles'

const MyEarned = ({enrollmentId}) => {
  const [points, setPoints] = useState([])

  useEffect( () => {
    axios.get(`/api/enrollments/${enrollmentId}/points`)
      .then( res => {
        setPoints(res.data)
      })
      .catch( err => console.log(err))
  },[])

  const renderEarned = () => {
    return points.map( e => (
      <Grid.Row>
        <Earn e={e}/>
      </Grid.Row>
    ))
  }

  return(
    <>
      <MyHeader>Activity</MyHeader>
      <Grid columns={4}>
        {renderEarned()}
      </Grid>
    </>
  )
}

const ConnectedMyEarned = (props) => (
  <PointConsumer>
    { value => (
      <MyEarned {...props} {...value} />
    )}
  </PointConsumer>
)

export default ConnectedMyEarned