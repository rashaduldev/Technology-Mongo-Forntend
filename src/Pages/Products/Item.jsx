import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Item = ({Sdata}) => {

    const { name } = useParams();
    console.log(name);

    const loadedData = useLoaderData();
    console.log(loadedData);

    const filteredData = loadedData.filter(data => data._id === name);

    const handleFavaroite = () => {
        console.log("clicked");
        const addecdFavArray = [];
        const favIteam = JSON.parse(localStorage.getItem('favorites'));

        if (!favIteam) {
            addecdFavArray.push(Sdata); 
            localStorage.setItem('favorites', JSON.stringify(addecdFavArray));
            toast.success("Added to favorites");
        } else {
            const isExist = favIteam.find(item => item._id === Sdata._id); 

            if (!isExist) {
                favIteam.push(Sdata); 
                localStorage.setItem('favorites', JSON.stringify(favIteam));
                toast.success("Added My Cart");
            } else {
                toast.error("Item already exists in My Cart.Please Check it");
            }

        }
    }

    return (
        <div>
            (
                    <div key={Sdata._id}>
                        <div className="card card-compact bg-base-100 shadow-xl mx-10">
                            <figure><img className='h-[400px] w-[70%] m-auto' src={Sdata.image} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-center mx-auto text-5xl font-bold"> {Sdata.name}</h2>
                                <p className='text-center text-2xl'> {Sdata.description}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={handleFavaroite} className="btn btn-primary">Add to cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
        </div>
    );
};

export default Item;