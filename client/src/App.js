import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/shared/Home';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import RegisterAdmin from './components/auth/RegisterAdmin';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import About from './components/shared/About';
import Footer from './components/shared/Footer';
import ClassroomSelect from './components/classrooms/ClassroomSelect';
import MyClassroom from './components/classrooms/MyClassroom';
import Dashboard from './components/enrollments/Dashboard';
import Dashboards from './components/enrollments/Dashboards';
import CreatePoints from './components/points/CreatePoints';
import EarnPoints from './components/points/EarnPoints';
import AdminRewards from './components/rewards/AdminRewards';
import Spend from './components/rewards/Spend';
import CreateClassroom from './components/classrooms/CreateClassroom';
import ClassroomProvider from './providers/ClassroomProvider'
import ViewClassrooms from './components/classrooms/ViewClassrooms'
import AuthConsumer from './providers/AuthProvider';
import AdminCreatePoints from './components/points/CreatePoints';
import RewardForm from './components/rewards/RewardForm';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/registerAdmin' component={RegisterAdmin} />
          <Route exact path="/about" component={About} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/home" component={Home} />
          <ProtectedRoute exact path="/ClassroomSelect" component={ClassroomSelect} />
          <ProtectedRoute exact path="/CreateClassroom" component={CreateClassroom} />
          <ProtectedRoute exact path="/MyClassroom" component={MyClassroom} />
          <ProtectedRoute exact path="/ViewClassrooms" component={ViewClassrooms} />
          <ProtectedRoute exact path="/Dashboard/:enrollment_id/:classroom_id" component={Dashboard} />
          <ProtectedRoute exact path="/CreatePoints" component={CreatePoints} />
          <ProtectedRoute exact path="/EarnPoints/:enrollment_id/:classroom_id" component={EarnPoints} />
          <ProtectedRoute exact path="/AdminRewards" component={AdminRewards} />
          <ProtectedRoute exact path="/CreateAdminReward" component={RewardForm} />
          <ProtectedRoute exact path="/Spend/:enrollment_id/:classroom_id" component={Spend} />
          <ProtectedRoute exact path="/CreatePoints/:enrollment_id/:classroom_id" component={CreatePoints} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Container>
    </FetchUser>
    
  </>
)

export default App;