import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import brandData from '../../../public/data.json'

const Detailsproduct = () => {
    let { name } = useParams();
    console.log(name);

    const lodeddata = useLoaderData();
    console.log(lodeddata);
    return (
        <div className='mx-10'>

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
                    <h2>{name}</h2>
                </div>
            <div className='grid grid-cols-4'>
                {
                    lodeddata.filter(data => data.brand. toLowerCase()  === name. toLowerCase() ).map(singleData => <div >
                        <div class="card bg-base-100 shadow-xl">
                            <figure class="px-10 pt-10">
                                <img src={singleData.image} class="rounded-xl" />
                            </figure>
                            <div class="card-body items-center text-center">
                                <h2 class="card-title">{singleData.name}</h2>
                                {/* <p>{singleData.}</p> */}
                                <div class="card-actions">
                                    <button class="btn btn-primary">Update</button>
                                    <button class="btn btn-primary">Details</button>
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