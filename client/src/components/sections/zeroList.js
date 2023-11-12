import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Zero = (props) => (
    <div className='tile'>
        <p>{props.zero.sku}</p>
        <p>
            <Link className='btn btn-link' to={`/zeros/${props.zero._id}`}>Open</Link> |
            <button className='btn btn-link' onClick={() => {
                props.deleteZero(props.zero._id);
            }}
            >
                Delete
            </button>
        </p>
    </div>
);

export default function ZeroList() {
    const [zeros, setZeros] = useState([]);

    useEffect(() => {
        async function getZeros() {
            const response = await fetch(`http://localhost:8080/zeros/`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const zeros = await response.json()
            setZeros(zeros);

        }

        getZeros();

        return;
    }, [zeros.length]);

    async function deleteZero(id) {
        await fetch(`http://localhost:8080/zeros/${id}`, {
            method: 'DELETE'
        });

        const newZeros = zeros.filter((el) => el._id !== id );
        setZeros(newZeros);
    }

    function zeroList() {
        return zeros.map((zero) => {
            return (
                <Zero
                    zero={zero}
                    deleteZero={() => deleteZero(zero._id)}
                    key={zero._id}
                />
            );
        });
    }

    return (
        <div className='zero-list'>
            <div>
                {zeroList()}
            </div>
        </div>
    );
};