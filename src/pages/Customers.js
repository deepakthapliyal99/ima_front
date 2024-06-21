import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTh, faBars, faEllipsisH, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Customers = () => {
  const navigate = useNavigate();

  const handleNewCustomerClick = () => {
    navigate('/sales/customers/new');
  };

  return (
    <div>
      {/* Top bar */}
      <div className="flex items-center bg-white p-4 mb-4 border-b border-gray-200">
        <h1 className="text-xl font-bold flex-1">All Customers</h1>
        <div className="flex items-center ml-4 space-x-2">
          <button onClick={handleNewCustomerClick} className="bg-blue-500 text-white p-2 rounded flex items-center">
            <FontAwesomeIcon icon={faPlus} className="mr-2" /> New
          </button>
          <button className="bg-gray-200 p-2 rounded">
            <FontAwesomeIcon icon={faBars} />
          </button>
          <button className="bg-gray-200 p-2 rounded">
            <FontAwesomeIcon icon={faTh} />
          </button>
          <button className="bg-gray-200 p-2 rounded">
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
          <button className="bg-orange-500 text-white p-2 rounded">
            <FontAwesomeIcon icon={faQuestionCircle} />
          </button>
        </div>
      </div>

      {/* Customers Table */}
      <div className="bg-white p-4 shadow rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">
                <input type="checkbox" />
              </th>
              <th className="py-2 px-4 border-b text-left">NAME</th>
              <th className="py-2 px-4 border-b text-left">COMPANY NAME</th>
              <th className="py-2 px-4 border-b text-left">EMAIL</th>
              <th className="py-2 px-4 border-b text-left">WORK PHONE</th>
              <th className="py-2 px-4 border-b text-left">RECEIVABLES (BCY)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">
                <input type="checkbox" />
              </td>
              <td className="py-2 px-4 border-b">
                <a href="#" className="text-blue-500">Mr. Deepak Kumar</a>
              </td>
              <td className="py-2 px-4 border-b">FIE</td>
              <td className="py-2 px-4 border-b">deepak@gmail.com</td>
              <td className="py-2 px-4 border-b">21356888</td>
              <td className="py-2 px-4 border-b">₹24,000.00</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
