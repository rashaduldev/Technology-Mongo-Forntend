import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import brandData from '../../../public/data.json'

const Detailsproduct = () => {
    const { name } = useParams();
    console.log(name);

    const lodeddata = useLoaderData();
    console.log(lodeddata);
    return (
        <div className='mx-10 mt-9'>

            <div className='w-[80%] m-auto h-[400px]'>
                {
                    brandData.filter(Sdata => Sdata.name === name).map(data => <div>
                        <div class="carousel h-96	w-full mx-auto">
                            <div id="slide1" class="carousel-item relative w-full">
                                <img src={data.img1} class="w-full" />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide4" class="btn btn-circle">❮</a>
                                    <a href="#slide2" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide2" class="carousel-item relative w-full">
                                <img src={data.img2} class="w-full" />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide1" class="btn btn-circle">❮</a>
                                    <a href="#slide3" class="btn btn-circle">❯</a>
                                </div>
                            </div>
                            <div id="slide3" class="carousel-item relative w-full">
                                <img src={data.img3} class="w-full" />
                                <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                    <a href="#slide2" class="btn btn-circle">❮</a>
                                    <a href="#slide1" class="btn btn-circle">❯</a>
                                </div>
                            </div>

                        </div>
                    </div>)
                }
            </div>
                <div>
                    <h2 className='text-5xl font-bold my-10 text-center'>{name}</h2>
                </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5  '>
                {
                    lodeddata.filter(data => data.brand. toLowerCase()  === name. toLowerCase() ).map(singleData => <div 
                    key={singleData._id} singleData={singleData}
                    className='mt-5'>
                        <div class="card bg-base-100 shadow-xl">
                            <figure class="px-10 pt-10 ">
                                <img src={singleData.image} class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title font-bold">Name:{singleData.name}</h2>
                                <h2 class="card-title">Brand:{singleData.brand}</h2>
                                <h2 class="card-title">Types:{singleData.types}</h2>
                                <h2 class="card-title">Price:{singleData.price}</h2>
                                <h2 class="card-title">Reating:{singleData.reating}</h2>
                                {/* <p>{singleData.}</p> */}
                                <div class="card-actions my-5">
                                   <button class="btn btn-primary">Update</button>
                                   <Link to={`/item/${singleData._id}`}><button class="btn btn-primary">Details</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Detailsproduct;