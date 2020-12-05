import React from 'react';
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import LogIn from './components/LogIn';
import{BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Scheduler from './components/scheduler.js';
import Chat from './components/chat.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
           <Route path ="/events" component={Scheduler} />
          <Route path='/' exact component={Home} />
          <Route path='/sign-up' exact component={LogIn} />
          <Route path='/chat' component={Chat}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
