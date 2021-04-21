import { PointConsumer } from "../../providers/PointProvider";
import PointsForm from "./PointsForm"



const AdminPoints = () => {

  return (
    <>
      <h1>Admin Points</h1>
      <p>Award points to students</p>
      <PointsForm />
    </>
  )
}

const ConnectedAdminPoints = (props) => (
  <PointConsumer>
    {
      value => (
        <AdminPoints {...props} {...value} />
      )
    }
  </PointConsumer>
)
export default ConnectedAdminPoints;