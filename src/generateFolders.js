import React from 'react';
import { Link } from 'react-router-dom';

export default function GenerateFolders(props) {
  function handleClick(e) {
    props.history.push(`/folder/${e.currentTarget.parentNode.dataset.id}`)
  }
  const folders = props.store.folders;
  let list;
  if (props.filter) {
    list = folders.map((folder, index) => {
      return (
        <li key={index} data-id={folder.id} className={folder.id===props.filter?'selected':''}>
          <button onClick={handleClick}>{folder.name}</button>
          <Link to={`/folder/${folder.id}`}></Link>
        </li>
      )
    })
  }
  else {
    list = folders.map((folder, index) => {
      return (
        <li key={index} data-id={folder.id}>
          <button onClick={handleClick}>{folder.name}</button>
          <Link to={`/folder/${folder.id}`}></Link>
        </li>
      )
    })
  }
  return (
    <ul>
      {list}
    </ul>
  )
}