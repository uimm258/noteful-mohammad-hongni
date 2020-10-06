import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(){
    return (
        <div>
            <header className="header">
                <Link to='/'>Noteful</Link>
            </header>
            
        </div>
    )
}