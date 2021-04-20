
import { List } from "semantic-ui-react";

const Earn = ({e}) => (
  <List >
    <List.Item>
      <List.Header>  
        {e.name}
      </List.Header> 
        <List.Description>
          {e.desc}
        </List.Description>
      
        {e.value}
     </List.Item>
 </List>
)

export default Earn;