import React from 'react';

import CreateTask from '../sections/createTask';
import TaskList from '../sections/taskList';

export default function Tasks() {
    return (
        <div>
            <div className='content-viewer'>
                <h2 className='page-title'>Tasks</h2>
                <CreateTask />
                <div className='tiles'>
                    <TaskList />
                </div>
            </div>
        </div>
    );
};