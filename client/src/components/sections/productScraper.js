import React from 'react';



export default function productScrape() {
    const [product, setProduct] = useState([]);
    useEffect(() => {
        async function getProduct() {
            
        }
    })
    return (
        <div>
            <h3>Scrape Inventory</h3>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='sku'>SKU: </label>
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
                        value='Search'
                        className='btn btn-primary'
                    />
                </div>
            </form>
        </div>
    );
}
 