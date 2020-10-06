import React from 'react';
import { Link } from 'react-router-dom';

export default function GenerateFolders(props){
  const folders = props.store.folders;
  const list=folders.map((folder,index)=>{
    return (
      <li key={index}>
        <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
      </li>
    )
  })
  return (
    <ul>
    {list}
    </ul>
  )
}