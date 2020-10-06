import React from 'react';
import Header from './Header/Header';

export default function Note(props) {
  const noteId = props.match.params.note;
  const note = props.store.notes.find(note => note.id === noteId)
  const folderId = note.folderId;
  return (
    <div>
      <Header />
      <main>
        <div className="folder">
          <button>Go Back</button>
          <button>{props.store.folders.find(folder => folder.id === folderId).name}</button>
        </div>
        <div className="note">
          <div className='note-container'>
            <h3>{note.name}</h3>
            <h5>Modified: {note.modified}</h5>
            <button>Delete Node</button>
          </div>
          <p>{note.content}</p>
        </div>
      </main>
    </div>
  )
}