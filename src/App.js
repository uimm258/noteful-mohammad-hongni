import React,{useEffect,useState} from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Folder from './Folder/Folder';
import Note from './Note';
import HomePage from './Homepage/HomePage';
import { Switch } from 'react-router-dom';
import { StoreContext } from './Context';
import Api from './Api';



function App() {
  
  const [folders,setFolders]=useState([]);
  const [notes,setNotes]=useState([]);

  useEffect(()=>{
    Api.getFolders()
    .then(folders=>setFolders(folders));
    Api.getNotes()
    .then(notes=>setNotes(notes));
  },[])

  let context = {
    folders,
    notes,
    deleteNote(noteId){
      Api.deleteNote(noteId)
      .then(Api.getNotes)
      .then(notes=>setNotes(notes));
    }
  }

  return (
    <div>
      <Switch>
        <StoreContext.Provider value={context}>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/folder/:folder" component={Folder} />
          <Route exact path="/note/:note" component={Note} />
        </StoreContext.Provider>
      </Switch>
    </div>
  )

};

export default App;


