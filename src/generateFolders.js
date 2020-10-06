import React from 'react';
import { Link } from 'react-router-dom';

export default function generateFolders(props){
  const folders = props.store.folders;
  const list=folders.map(folder=>{
    return (
      <li>
        <Link to={`/folder/${folder.id}`}>folder.name</Link>
      </li>
    )
  })
  return (
    <ul>
    {list}
    </ul>
  )
}