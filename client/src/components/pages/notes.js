import React from 'react';

import CreateNote from '../sections/createNote';
import NoteList from '../sections/noteList';

export default function Notes() {
    return (
        <div>
            <div className='content-viewer'>
                <h2 className='page-title'>Notes</h2>
                <CreateNote />
                <div className='tiles'>
                    <NoteList />
                </div>
            </div>
        </div>
    );
};