import React from 'react';

export default function GenerateNotes(props){
  function handleClick(e){
    props.history.push(`/note/${e.currentTarget.parentNode.dataset.id}`)
  }
  let list=props.store.notes;
  if(props.filter){
    list=list.filter(note=>note.folderId===props.filter)
  }
  list=list.map((note,index)=>{
    return (
      <li key={index} data-id={note.id}>
        <button onClick={handleClick}><h3>
          {note.name}
        </h3></button>
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