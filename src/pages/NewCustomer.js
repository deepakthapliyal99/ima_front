import React from 'react';
import { useNavigate } from 'react-router-dom';

const NewCustomer = () => {
  const navigate = useNavigate();

  const handleCancelClick = () => {
    navigate('/sales/customers');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">New Customer</h1>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Customer Type</label>
            <div className="flex items-center space-x-4 mt-2">
              <div>
                <input type="radio" name="customerType" id="business" />
                <label htmlFor="business" className="ml-2">Business</label>
              </div>
              <div>
                <input type="radio" name="customerType" id="individual" />
                <label htmlFor="individual" className="ml-2">Individual</label>
              </div>
            </div>
          </div>
          <div className="col-span-2 flex space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Primary Contact</label>
              <div className="flex space-x-2 mt-2">
                <select className="w-1/3 border border-gray-300 p-2 rounded-md">
                  <option>Salutation</option>
                </select>
                <input type="text" placeholder="First Name" className="w-1/3 border border-gray-300 p-2 rounded-md" />
                <input type="text" placeholder="Last Name" className="w-1/3 border border-gray-300 p-2 rounded-md" />
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Company Name</label>
            <input type="text" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
          </div>
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">Customer Display Name*</label>
            <input type="text" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" required />
          </div>
          <div className="col-span-1">
            <label className="block text-sm font-medium text-gray-700">Customer Email</label>
            <input type="email" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
          </div>
          <div className="col-span-1 flex space-x-2">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Customer Phone</label>
              <input type="text" placeholder="Work Phone" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">Mobile</label>
              <input type="text" placeholder="Mobile" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Other Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">PAN</label>
              <input type="text" className="mt-2 block w-full border border-gray-300 p-2 rounded-md" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Currency</label>
              <select className="mt-2 block w-full border border-gray-300 p-2 rounded-md">
                <option>INR - Indian Rupee</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Payment Terms</label>
              <select className="mt-2 block w-full border border-gray-300 p-2 rounded-md">
                <option>Due on Receipt</option>
              </select>
            </div>
            <div className="col-span-2">
              <input type="checkbox" id="enablePortal" className="mt-2" />
              <label htmlFor="enablePortal" className="ml-2">Allow portal access for this customer</label>
              <select className="mt-2 block w-full border border-gray-300 p-2 rounded-md">
                <option>Portal Language: English</option>
              </select>
            </div>
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700">Documents</label>
              <input type="file" className="block w-full text-gray-700 mt-2" multiple />
            </div>
          </div>
        </div>
        <div className="flex justify-end space-x-4">
          <button type="submit" className="bg-green-500 text-white p-2 rounded">Save</button>
          <button type="button" className="bg-red-500 text-white p-2 rounded" onClick={handleCancelClick}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default NewCustomer;
