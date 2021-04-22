import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alerts from './components/layout/Alerts';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AuthState from './context/auth/AuthState';
import ContactState from './context/contact/ContactState';
import AlertState from './context/alert/AlertState';
import './App.css';

const App = () => {
  return (
    <AuthState>
      <ContactState>
        <AlertState>
          <Router>
            <>
              <Navbar />
              <div className='container'>
                <Alerts />
                <Switch>
                  <Route exact path='/'>
                    <Home />
                  </Route>
                  <Route exact path='/about'>
                    <About />
                  </Route>
                  <Route exact path='/register'>
                    <Register />
                  </Route>
                  <Route exact path='/login'>
                    <Login />
                  </Route>
                </Switch>
              </div>
            </>
          </Router>
        </AlertState>
      </ContactState>
    </AuthState>
  );
};

export default App;
