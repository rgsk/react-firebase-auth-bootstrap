import { Container } from 'react-bootstrap';
import Signup from './components/Signup';
import { AuthProvider } from './context/AuthContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './components/ForgotPassword';
import UpdateProfile from './components/UpdateProfile';
function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: '100vh',
      }}
    >
      <div
        className="w-100"
        style={{
          maxWidth: '400px',
        }}
      >
        <BrowserRouter>
          <AuthProvider>
            <Switch>
              <Route path="/signup" exact component={Signup}></Route>
              <PrivateRoute path="/" exact component={Dashboard}></PrivateRoute>
              <PrivateRoute
                path="/update-profile"
                exact
                component={UpdateProfile}
              ></PrivateRoute>
              <Route path="/login" exact component={Login}></Route>
              <Route
                path="/forgot-password"
                exact
                component={ForgotPassword}
              ></Route>
            </Switch>
          </AuthProvider>
        </BrowserRouter>
      </div>
    </Container>
  );
}

export default App;
