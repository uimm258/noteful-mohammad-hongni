import React from 'react';
import { StoreContext } from './Context'

export default function GenerateFolders(props) {
  function handleClick(e) {
    props.history.push(`/folder/${e.currentTarget.parentNode.dataset.id}`)
  }
  return (
    <StoreContext.Consumer>
      {({folders})=><ul>
        {folders.map((folder, index) => {
        return (
          <li key={index} data-id={folder.id} className={props.filter?folder.id===props.filter?'selected':'':''}>
            <button onClick={handleClick}>{folder.name}</button>
          </li>
        )
      })}
      </ul>}
    </StoreContext.Consumer>
  )
}