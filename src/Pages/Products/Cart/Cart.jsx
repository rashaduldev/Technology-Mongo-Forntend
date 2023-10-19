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
        <div>
            <h1>My Cart</h1>
            <div>
                {donate.map(item => (
                    // <p key={item._id}>{item.name}</p>
                    <div key={item._id} class="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cart;
