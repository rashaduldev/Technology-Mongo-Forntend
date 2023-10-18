import React from 'react';
import { Link } from 'react-router-dom';
import Contact from '../Contact/Contact';
import Aboutus from '../Aboutus/Aboutus';
import sixDData from '../../../public/data.json'

const Header = () => {

    // const sixData=useLoaderData();
    // const {name,img}=sixData;
    // console.log(sixData);

    const heroStyle = {
        backgroundImage: 'url(https://i.ibb.co/J2s4HWG/banner.jpg)',
    };

    return (
     <div>
                 <div className="hero min-h-screen " style={heroStyle}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
             
                    <div className='my-10 mx-10'>
                    <h1 className='text-5xl text-center mt-5 mb-10 font-bold'>All Brands</h1>
                  
                   <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6  gap-5  cursor-pointer'>
           
           {

                    sixDData?.map(data=> 
                    <Link to={`/productdetails/${data.name}`}>
                  <div class="card card-compact bg-base-100 shadow-xl gap-5">
                  <figure><img src={data.img} alt="Shoes" /></figure>
                  <div class="card-body">
                      <h2 class="card-title text-2xl font-bold">{data.name}</h2>
                  </div>
                  </div>
                  </Link>
                  
                  )
                }
           </div>
                   
                    </div>
                    <Contact></Contact>
                    <Aboutus></Aboutus>

     </div>
    );
};

export default Header;


