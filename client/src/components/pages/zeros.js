import React from 'react';

import CreateZero from '../sections/createZero';
import ZeroList from '../sections/zeroList';

export default function Zeros() {
    return (
        <div>
            <div className='content-viewer'>
                <h2>Zero List</h2>
                <CreateZero />
                <div className='tiles'>
                    <ZeroList />
                </div>
            </div>
        </div>
    );
};