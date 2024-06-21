import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewItem = () => {
  const navigate = useNavigate();

    const handleNewItemCancel = () =>{
    navigate('/inventory/items');
  }

  return (
    <div className="p-4 lg:w-2/3">
      <h1 className="text-xl font-bold mb-4">New Item</h1>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Type</label>
            <div className="flex items-center space-x-4 mt-2">
              <div>
                <input type="radio" name="type" id="goods" />
                <label htmlFor="goods" className="ml-2">Goods</label>
              </div>
              <div>
                <input type="radio" name="type" id="service" />
                <label htmlFor="service" className="ml-2">Service</label>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">SKU</label>
            <input type="text" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Unit</label>
            <select className="mt-2 block w-full border border-gray-300 p-2 rounded-md">
              <option>Select or type to add</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Returnable Item</label>
            <input type="checkbox" className="mt-2 " />
          </div>
          <div className="col-span-1  md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Dimensions</label>
            <div className="flex space-x-2 mt-2">
              <input type="text" placeholder="L" className="w-1/3 border border-gray-300 p-2 rounded-md" />
              <input type="text" placeholder="W" className="w-1/3 border border-gray-300 p-2 rounded-md" />
              <input type="text" placeholder="H" className="w-1/3 border border-gray-300 p-2 rounded-md" />
              <select className="w-1/4 border border-gray-300 p-2 rounded-md">
                <option>cm</option>
                <option>inches</option>
              </select>
            </div>
          </div>
          <div className="col-span-1  md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Weight</label>
            <input type="text" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
          </div>
          <div className="col-span-1 md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">Manufacturer</label>
            <input type="text" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Brand</label>
            <input type="text" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">UPC</label>
            <input type="text" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">MPN</label>
            <input type="text" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">EAN</label>
            <input type="text" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">ISBN</label>
            <input type="text" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">Sales Information</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Selling Price</label>
                <input type="text" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Account</label>
                <select className="mt-2 block w-full border border-gray-300 p-2 rounded-md">
                  <option>Sales</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea className="mt-2 block w-full border border-gray-300 p-2 rounded-md" rows="4"></textarea>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-2">Purchase Information</h2>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Cost Price</label>
                <input type="text" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Account</label>
                <select className="mt-2 block w-full border border-gray-300 p-2 rounded-md">
                  <option>Cost of Goods Sold</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea className="mt-2 block w-full border border-gray-300 p-2 rounded-md" rows="4"></textarea>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Track Inventory for this item</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Inventory Account</label>
              <select className="mt-2 block w-full border border-gray-300 p-2 rounded-md">
                <option>Select an account</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Opening Stock</label>
              <input type="text" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Opening Stock Rate per Unit</label>
              <input type="text" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Reorder Point</label>
              <input type="text" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save</button>
          <button type="button" onClick={handleNewItemCancel} className="bg-red-500 text-white p-2 rounded">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default NewItem;
