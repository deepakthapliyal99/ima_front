import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTh, faBars, faEllipsisH, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const InventoryAdjustments = () => {
  const navigate = useNavigate();

  const handleNewAdjustmentClick = () => {
    navigate('/inventory/inventory-adjustments/new');
  };

  return (
    <div>
      {/* Top bar */}
      <div className="flex items-center bg-white p-4 mb-4 border-b border-gray-200">
        <h1 className="text-xl font-bold flex-1">Inventory Adjustments</h1>
        <div className="flex items-center ml-4 space-x-2">
          <button onClick={handleNewAdjustmentClick} className="bg-blue-500 text-white p-2 rounded flex items-center">
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

      {/* Filter bar */}
      <div className="flex items-center mb-4">
        <span className="mr-4">Filter By :</span>
        <select className="border border-gray-300 p-2 rounded-md mr-4">
          <option>Type: All</option>
        </select>
        <select className="border border-gray-300 p-2 rounded-md">
          <option>Period: All</option>
        </select>
      </div>

      {/* Inventory Adjustments Table */}
      <div className="bg-white p-4 shadow rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">
                <input type="checkbox" />
              </th>
              <th className="py-2 px-4 border-b text-left">DATE</th>
              <th className="py-2 px-4 border-b text-left">REASON</th>
              <th className="py-2 px-4 border-b text-left">DESCRIPTION</th>
              <th className="py-2 px-4 border-b text-left">STATUS</th>
              <th className="py-2 px-4 border-b text-left">REFERENCE NUMBER</th>
              <th className="py-2 px-4 border-b text-left">TYPE</th>
              <th className="py-2 px-4 border-b text-left">CREATED BY</th>
              <th className="py-2 px-4 border-b text-left">CREATED TIME</th>
              <th className="py-2 px-4 border-b text-left">LAST MODIFIED BY</th>
              <th className="py-2 px-4 border-b text-left">LAST MODIFIED TIME</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">
                <input type="checkbox" />
              </td>
              <td className="py-2 px-4 border-b">2024-06-19</td>
              <td className="py-2 px-4 border-b">Reason 1</td>
              <td className="py-2 px-4 border-b">Description 1</td>
              <td className="py-2 px-4 border-b">Completed</td>
              <td className="py-2 px-4 border-b">REF12345</td>
              <td className="py-2 px-4 border-b">Type 1</td>
              <td className="py-2 px-4 border-b">User 1</td>
              <td className="py-2 px-4 border-b">2024-06-19 08:00</td>
              <td className="py-2 px-4 border-b">User 2</td>
              <td className="py-2 px-4 border-b">2024-06-19 08:30</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryAdjustments;
