import React from 'react';
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <div className='navbar-logo'>
                <h1 className='page-title'>
                🐐 CHUCKY 🐐
                </h1>
            </div>
            <div className='navbar navbar-expand'>
                <Link className='link' to='/'>
                    HOME
                </Link>
                <Link className='link' to='/products'>
                    PRODUCTS
                </Link>
                <Link className='link' to='/tasks'>
                    TASKS
                </Link>
                <Link className='link' to='/notes'>
                    NOTES
                </Link>
                <Link className='link' to='/wholesale'>
                    WHOLESALE
                </Link>
            </div>
        </div>
    );
};