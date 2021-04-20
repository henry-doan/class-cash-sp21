import { PointConsumer } from '../../providers/PointProvider'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Earn from './Earn'
import { Card, Grid, Header } from 'semantic-ui-react'

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
      <Earn e={e}/>
    ))
  }

  return(
    <>
      <Header>Activities</Header>
      
        {renderEarned()}
    
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