import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function CreateTask() {
    const [form, setForm] = useState({
        content: '',
        deadline: '',
    });
    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value }
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        const newTask = { ...form };
        await fetch('http://localhost:8080/tasks/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(newTask),
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        setForm({
            content: '',
            deadline: '',
        });
        navigate('/tasks');
    }

    return (
        <div>
            <h3>Create Task</h3>
            <form onSubmit={onSubmit}>
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
                    <label htmlFor='deadline'>Deadline: </label>
                    <input
                        type='text'
                        className='form-control'
                        id='deadline'
                        value={form.deadline}
                        onChange={(e) => updateForm({ deadline: e.target.value })}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='submit'
                        value='Create Task'
                        className='btn btn-primary'
                    />
                </div>
            </form>
        </div>
    );
}