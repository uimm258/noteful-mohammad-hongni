import React from 'react';
import Folder from './Folder';
import Note from './Note';
import Header from './Header';
import { Link } from 'react-router-dom';

export default function HomePage(){
    return(
        <div>
            <Header />
            <main>
                <div className="folder">
                    <ul>
                        <li>
                            <Link to={ `/folder/:folder`}>Folder</Link>
                        </li>
                    </ul>
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
