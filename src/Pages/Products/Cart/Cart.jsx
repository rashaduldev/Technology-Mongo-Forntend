import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cart = () => {
    const { singleData } = useParams();
    console.log(singleData);

    const [donate, setDonate] = useState([]);
    const favIteam = JSON.parse(localStorage.getItem('favorites'));
    console.log(favIteam);

    useEffect(() => {
        const favIteam = JSON.parse(localStorage.getItem('favorites'));
        console.log(favIteam);

        if (favIteam) {
            setDonate(favIteam);
        } else {

            // Handle the case where no data is found.
            // You can set a message or take any other action as needed.
        }
    }, []);

    return (
        <div className='mx-10'>
            <h1 className='text-5xl text-center my-10 font-bold'>All Carts Item</h1>
            <div className='grid grid-cols-4 gap-5'>
                {donate.map(item => (
                    // <p key={item._id}>{item.name}</p>
                    <div key={item._id} class="card card-compact bg-base-100 shadow-xl">
                        <figure><img src={item.image} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">{item.name}</h2>
                            <p>{item.description}</p>
                            <div class="card-actions justify-end">
                                <button class="btn  btn-outline btn-error">Delete Iteam</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
