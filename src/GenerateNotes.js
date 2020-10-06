import React from 'react';
import { Link } from 'react-router-dom';

export default function GenerateNotes(props){
  const notes = props.store.notes;
  const list=notes.map((note,index)=>{
    return (
      <li key={index}>
        <Link to={`/note/${note.id}`}>{note.name}</Link>
        <h5>Date Modified: {note.modified}</h5>
      </li>
    )
  })
  return (
    <ul>
    {list}
    </ul>
  )
}