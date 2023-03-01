import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function CreateSearch() {
    const [form, setForm] = useState({
        query: ''
    });
    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value }
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        const newSearch = { ...form };
        await fetch('http://localhost:8080/searches/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(newSearch),
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        setForm({
            query: ''
        });
        navigate('/products');
    }

    return (
        <div>
            <h3>Create Search</h3>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='query'>Query: </label>
                    <input
                        type='text'
                        className='form-control'
                        id='query'
                        value={form.query}
                        onChange={(e) => updateForm({ query: e.target.value })}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='submit'
                        value='Create Search'
                        className='btn btn-primary'
                    />
                </div>
            </form>
        </div>
    );
}