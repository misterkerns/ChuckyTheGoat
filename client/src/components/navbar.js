import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <div className='navbar navbar-expand'>
                <NavLink className='home-link' to='/'>
                    <h1>HOME</h1>
                </NavLink>
            </div>
        </div>
    );
};