import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const SalesOrders = () => {
  const navigate = useNavigate();

  const handleNewSalesOrderClick = () => {
    navigate('/sales/sales-orders/new');
  };

  return (
    <div>
      {/* Top bar */}
      <div className="flex items-center bg-white p-4 mb-4 border-b border-gray-200">
        <h1 className="text-xl font-bold flex-1">All Sales Orders</h1>
        <div className="flex items-center ml-4 space-x-2">
          <button onClick={handleNewSalesOrderClick} className="bg-blue-500 text-white p-2 rounded flex items-center">
            <FontAwesomeIcon icon={faPlus} className="mr-2" /> New
          </button>
          <button className="bg-gray-200 p-2 rounded">
            <FontAwesomeIcon icon={faEllipsisH} />
          </button>
        </div>
      </div>

      {/* Sales Orders Table */}
      <div className="bg-white p-4 shadow rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">
                <input type="checkbox" />
              </th>
              <th className="py-2 px-4 border-b text-left">DATE</th>
              <th className="py-2 px-4 border-b text-left">SALES ORDER#</th>
              <th className="py-2 px-4 border-b text-left">REFERENCE#</th>
              <th className="py-2 px-4 border-b text-left">CUSTOMER NAME</th>
              <th className="py-2 px-4 border-b text-left">ORDER STATUS</th>
              <th className="py-2 px-4 border-b text-left">INVOICED</th>
              <th className="py-2 px-4 border-b text-left">PAYMENT</th>
              <th className="py-2 px-4 border-b text-left">PACKED</th>
              <th className="py-2 px-4 border-b text-left">SHIPPED</th>
              <th className="py-2 px-4 border-b text-left">AMOUNT</th>
              <th className="py-2 px-4 border-b text-left">DELIVERY METHOD</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">
                <input type="checkbox" />
              </td>
              <td className="py-2 px-4 border-b">19/06/2024</td>
              <td className="py-2 px-4 border-b">
                <a href="#" className="text-blue-500">SO-00002</a>
              </td>
              <td className="py-2 px-4 border-b">sadsad</td>
              <td className="py-2 px-4 border-b">Mr. Deepak Kumar</td>
              <td className="py-2 px-4 border-b text-blue-500">CONFIRMED</td>
              <td className="py-2 px-4 border-b">
                <div className="h-2.5 w-2.5 bg-gray-300 rounded-full"></div>
              </td>
              <td className="py-2 px-4 border-b">
                <div className="h-2.5 w-2.5 bg-gray-300 rounded-full"></div>
              </td>
              <td className="py-2 px-4 border-b">
                <div className="h-2.5 w-2.5 bg-blue-500 rounded-full"></div>
              </td>
              <td className="py-2 px-4 border-b">
                <div className="h-2.5 w-2.5 bg-gray-300 rounded-full"></div>
              </td>
              <td className="py-2 px-4 border-b">₹24,000.00</td>
              <td className="py-2 px-4 border-b">UFX</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">
                <input type="checkbox" />
              </td>
              <td className="py-2 px-4 border-b">17/06/2024</td>
              <td className="py-2 px-4 border-b">
                <a href="#" className="text-blue-500">SO-00001</a>
              </td>
              <td className="py-2 px-4 border-b"></td>
              <td className="py-2 px-4 border-b">Mr. Deepak Kumar</td>
              <td className="py-2 px-4 border-b text-green-500">CLOSED</td>
              <td className="py-2 px-4 border-b">
                <div className="h-2.5 w-2.5 bg-blue-500 rounded-full"></div>
              </td>
              <td className="py-2 px-4 border-b">
                <div className="h-2.5 w-2.5 bg-gray-300 rounded-full"></div>
              </td>
              <td className="py-2 px-4 border-b">
                <div className="h-2.5 w-2.5 bg-blue-500 rounded-full"></div>
              </td>
              <td className="py-2 px-4 border-b">
                <div className="h-2.5 w-2.5 bg-blue-500 rounded-full"></div>
              </td>
              <td className="py-2 px-4 border-b">₹23,520.00</td>
              <td className="py-2 px-4 border-b">UFX</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesOrders;
