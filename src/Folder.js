import React from 'react';
import Header from './Header/Header';
import GenerateFolders from './GenerateFolders'
import GenerateNotes from './GenerateNotes'

export default function Folder(props){
  const folderId = props.match.params.folder;
  return(
    <div>
        <Header />
        <main>
            <div className="folder">
                <GenerateFolders store={props.store} history={props.history} filter={folderId}/>
                <button>Add Folder</button>
            </div>

            <div className="note">
                <GenerateNotes store={props.store} filter={folderId}/>
            </div>
        </main>
    </div>
)
}