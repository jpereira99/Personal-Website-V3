import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/main';
import CPE487 from './pages/cpe487'
import './App.css';

function App() {
  return (
    <Router>

      <Switch>
        <Route path='/' exact component={ Main }/>
      </Switch>

      <Switch>
        <Route path='/projects/CPE487' exact component={ CPE487 }/>
      </Switch>

    </Router>
  );
}

export default App;
