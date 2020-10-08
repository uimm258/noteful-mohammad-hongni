import React from 'react';
import { StoreContext } from './Context'

export default function GenerateNotes(props) {
  function handleClick(e) {
    props.history.push(`/note/${e.currentTarget.parentNode.dataset.id}`)
  }
  return (
    <StoreContext.Consumer>
      {({notes})=><ul>
        {(props.filter ? notes.filter(note => note.folderId === props.filter) : notes).map((note, index) => {
          return (
            <li key={index} data-id={note.id}>
              <button onClick={handleClick}><h3>
                {note.name}
              </h3></button>
              <h5>Date Modified: {note.modified}</h5>
            </li>
          )
        })}
      </ul>}
    </StoreContext.Consumer>
  )
}