import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Movies from './components/Movies/movies';
import NavBar from './components/Movies/subComponents/navbar';
import Analytics from './components/Movies/subComponents/analytics';
import Rent from './components/Movies/subComponents/rent';
import AddMovie from './components/Movies/subComponents/addmovie';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <div className="content">
            <Switch>
              <Route path="/analytics" component={Analytics} />
              <Route path="/rent" component={Rent} />
              <Route path="/addmovie" component={AddMovie} />
              <Route path="/" component={Movies} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
