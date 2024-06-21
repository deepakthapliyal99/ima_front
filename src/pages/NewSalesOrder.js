import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewSalesOrder = () => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/sales/sales-orders');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">New Sales Order</h1>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Customer Name*</label>
            <div className="relative mt-2">
              <select className="block w-full border border-gray-300 p-2 rounded-md">
                <option>Select or add a customer</option>
              </select>
              <button className="absolute right-2 top-2 text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H5v14h14v-3a1 1 0 011-1h4a1 1 0 010 2h-4a1 1 0 01-1 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Sales Order#</label>
            <input type="text" value="SO-00003" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" readOnly />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Reference#</label>
            <input type="text" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Sales Order Date*</label>
            <input type="date" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" required />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Expected Shipment Date</label>
            <input type="date" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Payment Terms</label>
            <select className="mt-2 block w-full border border-gray-300 p-2 rounded-md">
              <option>Due on Receipt</option>
            </select>
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Delivery Method</label>
            <select className="mt-2 block w-full border border-gray-300 p-2 rounded-md">
              <option>Select a delivery method or type to add</option>
            </select>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Salesperson</label>
            <select className="mt-2 block w-full border border-gray-300 p-2 rounded-md">
              <option>Select or Add Salesperson</option>
            </select>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Item Table</h2>
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b text-left">ITEM DETAILS</th>
                <th className="py-2 px-4 border-b text-left">QUANTITY</th>
                <th className="py-2 px-4 border-b text-left">RATE</th>
                <th className="py-2 px-4 border-b text-left">AMOUNT</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b">
                  <input type="text" placeholder="Type or click to select an item" className="block w-full border border-gray-300 p-2 rounded-md" />
                </td>
                <td className="py-2 px-4 border-b">
                  <input type="number" placeholder="1.00" className="block w-full border border-gray-300 p-2 rounded-md" />
                </td>
                <td className="py-2 px-4 border-b">0.00</td>
                <td className="py-2 px-4 border-b">0.00</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
          <div className="flex space-x-4 mt-4">
            <button type="button" className="bg-gray-200 text-gray-700 p-2 rounded">Bulk Actions</button>
          </div>
        </div>
        <div className="flex justify-end space-x-4 mb-4">
          <button type="button" className="bg-gray-200 text-gray-700 p-2 rounded">Save as Draft</button>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save and Send</button>
          <button type="button" className="bg-red-500 text-white p-2 rounded" onClick={handleCancelClick}>Cancel</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Customer Notes</label>
            <textarea className="mt-2 block w-full border border-gray-300 p-2 rounded-md" placeholder="Enter any notes to be displayed in your transaction"></textarea>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Terms & Conditions</label>
            <textarea className="mt-2 block w-full border border-gray-300 p-2 rounded-md" placeholder="Enter the terms and conditions of your business to be displayed in your transaction"></textarea>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Attach File(s) to Sales Order</label>
            <input type="file" className="block w-full text-gray-700 mt-2" multiple />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewSalesOrder;
