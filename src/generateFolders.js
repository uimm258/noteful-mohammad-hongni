import React from 'react';

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
        </li>
      )
    })
  }
  else {
    list = folders.map((folder, index) => {
      return (
        <li key={index} data-id={folder.id}>
          <button onClick={handleClick}>{folder.name}</button>
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