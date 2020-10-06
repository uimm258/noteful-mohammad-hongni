import React from 'react';
import Folder from '../Folder';
import Note from '../Note';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import GenerateFolders from '../GenerateFolders'
import GenerateNotes from '../GenerateNotes'
import './HomePage.css'

export default function HomePage(props){
    return(
        <div>
            <Header />
            <main>
                <div className="folder">
                    <GenerateFolders store={props.store} history={props.history}/>
                    <button>Add Folder</button>
                </div>

                <div className="note">
                    <GenerateNotes store={props.store} history={props.history}/>
                </div>
            </main>
        </div>
    )
}
