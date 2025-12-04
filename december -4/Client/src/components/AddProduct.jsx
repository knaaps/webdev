import React from 'react';

const AddProduct = () => {
  return (
    <div className="grid place-items-center bg-amber-200 py-8" style={{height:"100vh"}}>
      <form className="border p-6 rounded-xl shadow-lg bg-white w-96">
        <div className="mb-4">
          <label className="block text-sm font-semibold">Name:</label>
          <input
            type="text"
            placeholder="Enter product name"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Price:</label>
          <input
            type="text"
            placeholder="Enter price"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Image URL:</label>
          <input
            type="text"
            placeholder="Enter image URL"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold">Description:</label>
          <textarea
            placeholder="Product description"
            className="w-full p-2 mt-1 border border-gray-300 rounded-md"
            rows="4"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
