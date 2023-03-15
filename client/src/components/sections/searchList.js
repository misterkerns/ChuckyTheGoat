import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Search = (props) => (
    <div className='tile'>
        <p>{props.search.query}</p>
        <p>
            <Link className='btn btn-link' to={`/searches/${props.search._id}`}>Open</Link> |
            <button className='btn btn-link' onClick={() => {
                props.deleteSearch(props.search._id);
            }}
            >
                Delete
            </button>
        </p>
    </div>
);

export default function SearchList() {
    const [searches, setSearches] = useState([]);

    useEffect(() => {
        async function getSearches() {
            const response = await fetch(`http://localhost:8080/searches/`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const searches = await response.json();
            setSearches(searches);
        }

        getSearches();

        return;
    }, [searches.length]);

    async function deleteSearch(id) {
        await fetch(`http://localhost:8080/searches/${id}`, {
            method: 'DELETE'
        });

        const newSearches = searches.filter((el) => el._id !== id);
        setSearches(newSearches);
    }

    function searchList() {
        return searches.map((search) => {
            return (
                <Search
                    search={search}
                    deleteSearch={() => deleteSearch(search._id)}
                    key={search._id}
                />
            );
        });
    }

    return (
        <div className='search-list'>
            <div>
                {searchList()}
            </div>
        </div>
    );
};