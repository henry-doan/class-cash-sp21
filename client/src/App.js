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
import Earn from './components/points/Earn';
import AdminRewards from './components/rewards/AdminRewards';
import Spend from './components/rewards/Spend';
import CreateClassroom from './components/classrooms/CreateClassroom';
import ClassroomProvider from './providers/ClassroomProvider'
import ViewClassrooms from './components/classrooms/ViewClassrooms'
import AuthConsumer from './providers/AuthProvider'

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
          <ProtectedRoute exact path="/Dashboard" component={Dashboard} />
          <ProtectedRoute exact path="/CreatePoints" component={CreatePoints} />
          <ProtectedRoute exact path="/Earn" component={Earn} />
          <ProtectedRoute exact path="/AdminRewards" component={AdminRewards} />
          <ProtectedRoute exact path="/Spend" component={Spend} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Container>
    </FetchUser>
    
  </>
)

export default App;