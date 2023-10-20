import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        // Load items from localStorage when the component is mounted
        const favItems = JSON.parse(localStorage.getItem('favorites'));
        if (favItems) {
            setItems(favItems);
        }
    }, []);

    const deleteItem = (itemToDelete) => {
        // Remove the specific item from the UI and localStorage
        const updatedItems = items.filter(item => item._id !== itemToDelete._id);
        setItems(updatedItems);
        localStorage.setItem('favorites', JSON.stringify(updatedItems));
    };

    return (
        <div className='mx-10'>
            <h1 className='text-5xl text-center my-10 font-bold'>All Cart Items</h1>
            <div className='grid grid-cols-4 gap-5'>
                {items.length === 0 ? (
                    <p className='text-4xl text-red-700 justify-center mx-auto col-span-4 my-10'>You have no item, <span className='underline'><Link to={'/'}>Please add Item</Link></span></p>
                ) : (
                    items.map(item => (
                        <div key={item._id} className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={item.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{item.name}</h2>
                                <p>{item.description}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => deleteItem(item)} className="btn btn-outline btn-error">Delete Item</button>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Cart;
