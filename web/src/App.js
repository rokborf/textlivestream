import React, { Component } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Streams from './Streams';
import Messages from './Messages';

const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
)

class App extends Component {
  render() {
      return (
          <Router>
              <div>
                  <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/streams">Streams</Link></li>
                  </ul>

                  <hr/>

                  <Route exact path="/" component={Home}/>
                  <Route path="/streams" component={Streams}/>
                  <Route path="/streams/:id/messages" component={Messages} />
              </div>
          </Router>
      );
  }
}

export default App;
