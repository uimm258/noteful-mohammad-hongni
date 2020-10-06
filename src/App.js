import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Folder from './Folder';
import Note from './Note';
import HomePage from './Homepage/HomePage';
import store from './STORE';
import { Switch } from 'react-router-dom';

class App extends Component {
  state = {
    folders: [],
    notes: [],
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <HomePage {...props} store={store} />} />
          <Route exact path="/folder/:folder" render={(props) => <Folder {...props} store={store} />} />
          <Route exact path="/note/:note" component={Note} />
        </Switch>
      </div>
    )
  }

};

export default App;


