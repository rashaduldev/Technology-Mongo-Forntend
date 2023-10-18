

const AddProducts = () => {



    const handleUser=e=>{
        e.preventDefault();
        const form=e.target;
        // form.reset();
        const image=form.image.value;
        const name=form.name.value;
        const brand=form.brand.value;
        const types=form.types.value;
        const price=form.price.value;
        const description=form.description.value;
        const createData={image,name,brand,types,price,description};
        console.log(createData);
    
        fetch('http://localhost:3000/productdetails',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(createData),
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
    }


    return (
        <div>
            <form onSubmit={handleUser} className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
                <div className="grid grid-cols-2 gap-4">
                    {/* First Row */}
                    <div className="col-span-2">
                        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Image</label>
                        <input type="text" id="image" name="image" className="mt-1 p-2 w-full border rounded-md" placeholder="Image URL" />
                    </div>

                    {/* Second Row */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md" placeholder="Product Name" />
                    </div>

                    <div>
                        <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand Name</label>
                        <input type="text" id="brand" name="brand" className="mt-1 p-2 w-full border rounded-md" placeholder="Brand Name" />
                    </div>

                    {/* Third Row */}
                    <div>
                        <label htmlFor="types" className="block text-sm font-medium text-gray-700">Types of Products</label>
                        <input type="text" id="types" name="types" className="mt-1 p-2 w-full border rounded-md" placeholder="Product Types" />
                    </div>

                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
                        <input type="text" id="price" name="price" className="mt-1 p-2 w-full border rounded-md" placeholder="Product Price" />
                    </div>

                    {/* Fourth Row */}
                    <div className="col-span-2">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Short Description</label>
                        <input type="text" id="description" name="description" className="mt-1 p-2 w-full border rounded-md" placeholder="Short Description" />
                    </div>
                </div>

                {/* Button */}
                <div className="mt-4">
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md font-semibold hover:bg-blue-600">
                        Add Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddProducts;




{/* fetch('http://localhost:3000/newusers',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body:JSON.stringify(createData),
    })

    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    }) */}