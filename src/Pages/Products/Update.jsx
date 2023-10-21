import { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Update = () => {
    const updateLoader = useLoaderData();
    const { id } = useParams();
    const productToUpdate = updateLoader.find(item => item._id === id);
    const [formData, setFormData] = useState({
        image: productToUpdate.image || '',
        name: productToUpdate.name || '',
        brand: productToUpdate.brand || '',
        types: productToUpdate.types || '',
        price: productToUpdate.price || '',
        rating: productToUpdate.rating || '',
        description: productToUpdate.description || '',
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="mt-10">
            <form className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
                            Image
                        </label>
                        <input
                            type="text"
                            id="image"
                            name="image"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Image URL"
                            value={formData.image}
                            onChange={handleFormChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Product Name"
                            value={formData.name}
                            onChange={handleFormChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                            Brand Name
                        </label>
                        <input
                            type="text"
                            id="brand"
                            name="brand"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Brand Name"
                            value={formData.brand}
                            onChange={handleFormChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="types" className="block text-sm font-medium text-gray-700">
                            Types of Products
                        </label>
                        <input
                            type="text"
                            id="types"
                            name="types"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Product Types"
                            value={formData.types}
                            onChange={handleFormChange}
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                            Price
                        </label>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Product Price"
                            value={formData.price}
                            onChange={handleFormChange}
                            required
                        />
                    </div>
                    <div className="">
                        <label htmlFor="rating" className="block text-sm font-medium text-gray-700">
                            Rating
                        </label>
                        <input
                            type="text"
                            id="rating"
                            name="rating"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Rating number out of 5"
                            value={formData.rating}
                            onChange={handleFormChange}
                            required
                        />
                    </div>
                    <div className="">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Short Description
                        </label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Short Description"
                            value={formData.description}
                            onChange={handleFormChange}
                            required
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md font-semibold hover-bg-blue-600">
                        Update Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Update;
