import moment from 'moment'
import { Grid, List } from "semantic-ui-react";

const Earn = ({e}) => {
  const displayValue = () => {
    if(e.value >= 0){
      return(
        <p style={{fontSize: '1.125rem', fontWeight: 'bold', color: '#1CB993'}}>
        +{e.value}
        </p>
      )
    }else{
      return(
        <p style={{fontSize: '1.125rem', fontWeight: 'bold', color: '#1CB993'}}>
          {e.value}
        </p>
      )
    }
  }

  const displayName = () => {
    if(e.value >=0){
      return(
        <p style={{fontSize: '1rem', fontWeight: 'bold'}}>  
          {e.name} &nbsp; &nbsp;
        </p> 
      )
    }else{
      return(
        <p style={{fontSize: '1rem', fontWeight: 'bold'}}>  
          Purchased {e.name} &nbsp; &nbsp;
        </p>
      )
    }
  }

  return(
  <>
    <Grid.Column width={5}>
      <p style={{fontSize: '1rem'}}>{moment(e.created_at).format('LLL')} &nbsp; &nbsp;</p>
    </Grid.Column>
    <Grid.Column width={3}>
      {displayName()}
    </Grid.Column>
    <Grid.Column width={7}>
      <p style={{fontSize: '1rem'}}>
        {e.desc} &nbsp; &nbsp;
      </p>
    </Grid.Column>
    <Grid.Column width={1}>
      {displayValue()}
    </Grid.Column>
  </>
  )
}

export default Earn;