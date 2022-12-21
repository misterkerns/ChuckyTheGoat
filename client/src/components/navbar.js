import React from 'react';
import {NavLink} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <div className='navbar-logo'>
            <h1>
            CHUCKY THE 🐐
            </h1>
            </div>
            <div className='navbar navbar-expand'>
                <NavLink className='home-link' to='/'>
                    <a>HOME</a>
                </NavLink>
                <NavLink className='products-link' to='/products'>
                    <a>PRODUCTS</a>
                </NavLink>
                <NavLink className='tasks-link' to='/tasks'>
                    <a>TASKS</a>
                </NavLink>
            </div>
        </div>
    );
};