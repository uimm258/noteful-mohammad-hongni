import React from 'react';
import Folder from './Folder';
import Note from './Note';
import Header from './Header';
import { Link } from 'react-router-dom';
import generateFolders from './generateFolders'

export default function HomePage(props){
    return(
        <div>
            <Header />
            <main>
                <div className="folder">
                    <generateFolders store={props.store}/>
                </div>

                <div className="note">
                    <ul>
                        <li>
                            <Link to={`/note/:note`}>Note</Link>
                        </li>
                    </ul>
                </div>
            </main>
        </div>
    )
}
