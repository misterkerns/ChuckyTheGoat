import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CardFinder() {
    const [form, setForm ] = useState({
        card_sku: ''
    });

    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }
    
    async function onSubmit(e) {
        e.preventDefault();
        const newCard = { ...form };
    
        //post to server to search
    
        setForm({ card_sku: '' });
        navigate('/');
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
            <label htmlFor='card-sku'>Card Sku: </label>
            <input
                type='text'
                className='form-control'
                id='card-sku'
                value={form.card_sku}
                onChange={(e) => updateForm({ card_sku: e.target.value })}
            />
            <div className='form-group'>
                <input
                    type='submit'
                    value='Search'
                    className='btn btn-primary'
                />
            </div>
            </form>
        </div>
        
    )
}