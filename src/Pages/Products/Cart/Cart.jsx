import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [items, setItems] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);

    useEffect(() => {
        // Load items from localStorage when the component is mounted
        const favItems = JSON.parse(localStorage.getItem('favorites'));
        if (favItems) {
            setItems(favItems);
        }
    }, []);

    const deleteItem = (itemToDelete) => {
        // Show the confirmation modal when Delete Item is clicked
        setIsModalOpen(true);
        setItemToDelete(itemToDelete);
    };

    const confirmDelete = () => {
        // Remove the specific item from the UI and localStorage
        const updatedItems = items.filter(item => item._id !== itemToDelete._id);
        setItems(updatedItems);
        localStorage.setItem('favorites', JSON.stringify(updatedItems));
        // Close the modal after deleting
        setIsModalOpen(false);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setItemToDelete(null);
    };

    return (
        <div className='mx-10'>
            <h1 className='text-5xl text-center my-10 font-bold'>All Cart Items</h1>
            <div className='grid grid-cols-4 gap-5'>
                {items.map(item => (
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
                ))}
            </div>

            {isModalOpen && (
                <dialog className="modal" open>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Are you sure?</h3>
                        <p className="py-4">Delete this Item ?</p>
                        <div className="modal-action">
                            <button onClick={closeModal} className="btn">NO</button>
                            <button onClick={confirmDelete} className="btn">YES</button>
                        </div>
                    </div>
                </dialog>
            )}
        </div>
    );
};

export default Cart;
