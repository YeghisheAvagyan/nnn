import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import TopRepoList from './components/top_repo';
import RandomRepo from './components/rand_repo';

class App extends Component {
  render() {
    return (
      <div className="htitle">
        <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="pic" height="100px" />
        <Router>
          <div>
            <ul className="nav nav-tabs nav-justified">
              <li><Link to='/'>HOME</Link></li>
              <li><Link to='/top'>MOST STARRED GITHUB REPOSITORIES</Link></li>
              <li><Link to='/rand'>RANDOM GITHUB REPOSITORIES</Link></li>
            </ul>
              
            <Route exact path='/' />
            <Route path='/top' component={TopRepoList} />
            <Route path='/rand' component={RandomRepo} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
