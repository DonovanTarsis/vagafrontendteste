import {
  BrowserRouter as Router, Redirect, Route,
  Switch,
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

const Routes = () => (
  <Router>
    <Switch>
      <AuthProvider>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <RotasProtegidas>
          <Route
            path="/mail"
            component={Mail}
          />
        </RotasProtegidas>
      </AuthProvider>
    </Switch>
  </Router>
);

export default Routes;
