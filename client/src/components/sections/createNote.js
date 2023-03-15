import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function CreateNote() {
    const [form, setForm] = useState({
        title: '',
        content: '',
    });
    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        const newNote = { ...form };
        await fetch('http://localhost:8080/notes/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(newNote),
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        setForm({
            title: '',
            content: '',
        });
        navigate('/notes');
    }

    return (
        <div>
            <h3>Create Note</h3>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='title'>Title: </label>
                    <input
                        type='text'
                        className='form-control'
                        id='title'
                        value={form.title}
                        onChange={(e) => updateForm({ title: e.target.value })}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='content'>Content: </label>
                    <input
                        type='text'
                        className='form-control'
                        id='content'
                        value={form.content}
                        onChange={(e) => updateForm({ content: e.target.value })}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='submit'
                        value='Create Note'
                        className='btn btn-primary'
                    />
                </div>
            </form>
        </div>
    );
}