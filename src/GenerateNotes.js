import React from 'react';
import { Link } from 'react-router-dom';

export default function GenerateNotes(props){
  const notes = props.store.notes;
  let list=props.store.notes;
  if(props.filter){
    list=list.filter(note=>note.folderId===props.filter)
  }
  list=list.map((note,index)=>{
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