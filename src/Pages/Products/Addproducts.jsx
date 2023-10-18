// import React from 'react';

// const Addproducts = () => {
//     return (
//         <div>
//             input*
//         </div>
//     );
// };

// export default Addproducts;

import React, { useState } from 'react';

const Addproducts = () => {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    brandName: '',
    price: '',
    item: '',
    shortDescription: '',
    rating: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
console.log(formData);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to an API
  };

  return (
    <div className="container px-10 md:mx-auto ">
        <h1 className='text-4xl font-bold text-center my-10'>Add a new Product</h1>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="image">Image</label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Image URL"
            className="w-full border rounded px-2 py-1"
            value={formData.image}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Product Name"
            className="w-full border rounded px-2 py-1"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="brandName">Brand Name</label>
          <input
            type="text"
            id="brandName"
            name="brandName"
            placeholder="Brand Name"
            className="w-full border rounded px-2 py-1"
            value={formData.brandName}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            name="price"
            placeholder="Price"
            className="w-full border rounded px-2 py-1"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="item">Item</label>
          <input
            type="text"
            id="item"
            name="item"
            placeholder="Item"
            className="w-full border rounded px-2 py-1"
            value={formData.item}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="shortDescription">Short Description</label>
          <input
            type="text"
            id="shortDescription"
            name="shortDescription"
            placeholder="Short Description"
            className="w-full border rounded px-2 py-1"
            value={formData.shortDescription}
            onChange={handleChange}
          />
        </div>
      
        <div className=" text-center">
          <button type="submit" className="bg-blue-500 text-white rounded px-4 py-2">
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default Addproducts;
