import { Switch, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import Home from './components/shared/Home';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import FetchUser from './components/auth/FetchUser';
import ProtectedRoute from './components/auth/ProtectedRoute';
import About from './components/shared/About';
import Footer from './components/shared/Footer';
const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path="/about" component={About} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/home" component={Home} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Container>
    </FetchUser>
  </>
)
export default App;