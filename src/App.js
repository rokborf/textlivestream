import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';
import Streams from './Streams';
import AddStream from './Streams/add';
import Stream from './Streams/stream';
import Messages from './Messages';
import AddMessage from './Messages/add';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Streams} />
          <Route exact path="/add" component={AddStream} />
          <Router>
            <div>
              <Route path="/:id/" component={Stream} />
              <Route path="/:id/messages/add" component={AddMessage} />
              <Route path="/:id/messages" component={Messages} />
            </div>
          </Router>
        </Switch>
      </Router>
    );
  }
}

export default App;
