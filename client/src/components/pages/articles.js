import React from 'react';

import CreateArticle from '../sections/createArticle';
import ArticleList from '../sections/articleList';


export default function Articles() {
    return (
        <div>
            <div className='content-viewer'>
                <h2 className='page-title'>Articles</h2>
                <CreateArticle />
                <div className='tiles'>
                    <ArticleList />
                </div>
            </div>
        </div>
    );
};