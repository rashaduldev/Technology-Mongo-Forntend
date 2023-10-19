import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ItemDetails = () => {
    const { name } = useParams();
    console.log(name);

    const loadedData = useLoaderData();
    console.log(loadedData);

    const filteredData = loadedData.filter(data => data._id === name);

    return (
        <div className='my-10'>
            {
                filteredData.map(Sdata => <div key={Sdata._id}>

                    <div className="card card-compact bg-base-100 shadow-xl mx-10">
                        <figure><img className='h-[400px] w-[70%] m-auto' src={Sdata.image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-center mx-auto text-5xl font-bold"> {Sdata.name}</h2>
                            <p className='text-center text-2xl'> {Sdata.description}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Add to cart</button>
                            </div>
                        </div>
                    </div>
                  </div>)
            }
        </div>
    );
};

export default ItemDetails;
