import React from 'react';

const Aboutus = () => {
    return (
        <div className='px-10 '>
            <h1 className='text-7xl text-center font-bold my-10'>About Us</h1>
       <div >
       <div className="hero min-h-screen bg-base-200 rounded-md">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/VQ4W8c6/company.jpg" className="w-auto md:max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">What we are</h1>
      <p className="py-6">we are dedicated to fostering a dynamic learning community where students are encouraged to explore their passions, expand their horizons, and excel in their chosen fields of study. With a rich history of academic excellence and a commitment to innovation, our institution has been a cornerstone of higher education for 4 years.</p>
      <p className="py-6">Our esteemed faculty, state-of-the-art facilities, and diverse student body make  a hub for intellectual growth and cultural diversity. We take pride in preparing our students not only for successful careers but also to be responsible global citizens. Join us in the pursuit of knowledge, discovery, and personal growth as we continue to shape the leaders of tomorrow</p>
      <button className="btn btn-accent">See Location</button>
    </div>
  </div>
        </div>
        <div>
        <h2 className='text-7xl text-center font-bold my-10'>We Are</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 text-center gap-5 mx-auto lg:mx-10'>
                        <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/VQ4W8c6/company.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                        <h2 className="card-title text-3xl">Chief Executive Officer (CEO)</h2>
                            <h2 className="card-title text-3xl">Raymond Salazar</h2>
                            <h2 className="card-title">MCA, PhD</h2>
                            <p className="card-title">Computer Science</p>
                            <div className="card-actions">
                            <button className="btn btn-success">Contact</button>
                            </div>
                        </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/VQ4W8c6/company.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                        <h2 className="card-title text-3xl">Chief Operating Officer (COO)</h2>
                            <h2 className="card-title text-3xl">Raymond Salazar</h2>
                            <h2 className="card-title">MCA, PhD</h2>
                            <p className="card-title">Computer Science</p>
                            <div className="card-actions">
                            <button className="btn btn-success">Contact</button>
                            </div>
                        </div>
                        </div>
                        <div className="card bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://i.ibb.co/VQ4W8c6/company.jpg" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body">
                        <h2 className="card-title text-3xl">General Manager (GM)</h2>
                            <h2 className="card-title text-3xl">Raymond Salazar</h2>
                            <h2 className="card-title">MCA, PhD</h2>
                            <p className="card-title">Computer Science</p>
                            <div className="card-actions">
                            <button className="btn btn-success">Contact</button>
                            </div>
                        </div>
                        </div>
                      
                      
                </div>
        </div>
       </div>
        </div>
    );
};

export default Aboutus;