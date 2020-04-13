import React, { Fragment } from 'react';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alert from './components/layout/Alert';
import './App.css';

// Reux

import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path='/' component={Landing} />
        <section className='container'>
          <Alert />
          <switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
          </switch>
        </section>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
