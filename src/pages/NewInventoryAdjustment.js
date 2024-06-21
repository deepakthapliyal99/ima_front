import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewInventoryAdjustment = () => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/inventory/inventory-adjustments');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">New Adjustment</h1>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Mode of adjustment</label>
            <div className="flex items-center space-x-4 mt-2">
              <div>
                <input type="radio" name="adjustmentType" id="quantity" />
                <label htmlFor="quantity" className="ml-2">Quantity Adjustment</label>
              </div>
              <div>
                <input type="radio" name="adjustmentType" id="value" />
                <label htmlFor="value" className="ml-2">Value Adjustment</label>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Reference Number</label>
            <input type="text" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input type="date" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Account</label>
            <select className="mt-2 block w-full border border-gray-300 p-2 rounded-md">
              <option>Cost of Goods Sold</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Reason</label>
            <select className="mt-2 block w-full border border-gray-300 p-2 rounded-md">
              <option>Select a reason</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea className="mt-2 block w-full border border-gray-300 p-2 rounded-md" rows="4" maxLength="500"></textarea>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Item Details</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">Item</th>
                <th className="py-2 px-4 border-b text-left">Quantity Available</th>
                <th className="py-2 px-4 border-b text-left">New Quantity on Hand</th>
                <th className="py-2 px-4 border-b text-left">Quantity Adjusted</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">
                  <input type="text" placeholder="Type or click to select an item" className="block w-full border border-gray-300 p-2 rounded-md" />
                </td>
                <td className="py-2 px-4 border-b">0.00</td>
                <td className="py-2 px-4 border-b">0.00</td>
                <td className="py-2 px-4 border-b">
                  <input type="text" placeholder="Eg. +10, -10" className="block w-full border border-gray-300 p-2 rounded-md" />
                </td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
          <div className="flex space-x-4 mt-4">
            <button type="button" className="bg-gray-200 text-gray-700 p-2 rounded">Add New Row</button>
            <button type="button" className="bg-gray-200 text-gray-700 p-2 rounded">Add Items in Bulk</button>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Attach File(s) to Inventory Adjustment</h2>
          <input type="file" className="block w-full text-gray-700" multiple />
        </div>
        <div className="flex justify-end space-x-4">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save as Draft</button>
          <button type="submit" className="bg-green-500 text-white p-2 rounded">Convert to Adjusted</button>
          <button type="button" className="bg-red-500 text-white p-2 rounded" onClick={handleCancelClick}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default NewInventoryAdjustment;

