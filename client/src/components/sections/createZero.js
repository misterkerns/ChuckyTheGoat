import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function CreateZero() {
    const [form, setForm] = useState({
        sku: '',
    });
    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        const newZero = { ...form };
        await fetch('http://localhost:8080/zeros/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(newZero)
        })
        .catch(error => {
            window.alert(error);
            return;
        });

        setForm({
            sku: '',
        });
        navigate('/zeros');
    }

    return (
        <div>
            <h3>Create Zero</h3>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='sku'>Sku: </label>
                    <input
                        type='text'
                        className='form-control'
                        id='sku'
                        value={form.sku}
                        onChange={(e) => updateForm({ sku: e.target.value })}
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='submit'
                        value='Create Zero'
                        className='btn btn-primary'
                    />
                </div>
            </form>
        </div>
    );
}