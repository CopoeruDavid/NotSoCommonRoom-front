import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Scheduler from './components/scheduler.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
           <Route path = "/" exact />
           <Route path ="/hatz" component={Scheduler} />
        </Switch>
     </Router>
    </div>
  );
}

export default App;
