import React from 'react';
import Header from './Header/Header';
import { StoreContext } from './Context';

export default function Note(props) {
  const noteId = props.match.params.note;

  
  return (
    <StoreContext.Consumer>
      {({ notes,folders,deleteNote }) => {
        const note = notes.find(note => note.id === noteId)
        const folderId = note.folderId;
        return (<div>
          <Header />
          <main>
            <div className="folder">
              <button onClick={props.history.goBack}>Go Back</button>
              <button>{folders.find(folder => folder.id === folderId).name}</button>
            </div>
            <div className="note">
              <div className='note-container'>
                <h3>{note.name}</h3>
                <h5>Modified: {note.modified}</h5>
                <button onClick={()=>{deleteNote(note.id);props.history.push('/')}}>Delete Node</button>
              </div>
              <p>{note.content}</p>
            </div>
          </main>
        </div>)
      }
      }
    </StoreContext.Consumer>
  )
}