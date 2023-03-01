import React from 'react';
import CreateSearch from '../sections/createSearch';
import SearchList from '../sections/searchList';

 export default function Products() {
    return (
        <div className='content-viewer'>
            <h2 className='page-title'>Products</h2>
            <CreateSearch />
            <div className='tiles'>
                <SearchList />
            </div>
        </div>
    )
 }