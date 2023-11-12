import React from 'react';
import TaskList from '../sections/taskList';
import ArticleList from '../sections/articleList';

export default function Home() {
    return (
        <div>
            <div className='content-viewer tiles'>
                <h2 className='page-title'>Home</h2>
                <h3>Tasks:</h3>
                <TaskList />
            </div>
        </div>
    );
};