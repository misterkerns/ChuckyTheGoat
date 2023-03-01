import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Article = (props) => (
    <div className='tile'>
        <p>{props.article.title}</p>
        <p>{props.article.content}</p>
        <p>
            <Link className='btn btn-link' to={`/articles/${props.article._id}`}>Open</Link> |
            <button className='btn btn-link' onClick={() => {
                props.deleteArticle(props.article._id);
            }}
            >
                Delete
            </button>
        </p>
    </div>
);

export default function ArticleList() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function getArticles() {
            const response = await fetch(`http://localhost:8080/articles/`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const articles = await response.json();
            setArticles(articles);
        }

        getArticles();

        return;
    }, [articles.length]);

    async function deleteArticle(id) {
        await fetch(`http://localhost:8080/articles/${id}`, {
            method: 'DELETE'
        });

        const newArticles = articles.filter((el) => el._id !== id);
        setArticles(newArticles);
    }

    function articleList() {
        return articles.map((article) => {
            return (
                <Article
                    article={article}
                    deleteArticle={() => deleteArticle(article._id)}
                    key={article._id}
                />
            );
        });
    }

    return (
        <div className='article-list'>
            <div>
                {articleList()}
            </div>
        </div>
    );
};