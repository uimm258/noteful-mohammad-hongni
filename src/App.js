import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Folder from './Folder';
import Note from './Note';
import HomePage from './HomePage';


class App extends Component{
  state = {
    folders: [],
    notes: [],
  }

  render(){
    return(
      <div>

        <switch>

          <Route exact path="/" component={HomePage} />
          <Route exact path="/folder/:folder" component={Folder}/>
          <Route exact path="/note/:note" component={Note} />
        </switch>
      </div>
    )
  }

};

export default App;


