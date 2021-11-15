import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';
import { AuthProvider } from './context/AuthContext';
import useAuth from './hooks/useAuth';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Mail from './pages/Mail/Mail';

const RotasProtegidas = ({ children }) => {
  const { logado } = useAuth();
  return (
    <Route render={() => (logado ? children : <Redirect to="/login" />)} />
  );
};

const Routes = () => {
  return (
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/login" component={Login} />
            <RotasProtegidas>
              <Route
                path="/main"
                component={Mail}
              />
            </RotasProtegidas>
          </Switch>
        </Router>
      </AuthProvider>
  )
};

export default Routes;
