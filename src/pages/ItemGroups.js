import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTh, faBars, faEllipsisH, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const ItemGroups = () => {
  const navigate = useNavigate();

  const handleNewItemGroupClick = () => {
    navigate('/inventory/item-groups/new');
  };

  return (
    <div>
      {/* Top bar */}
      <div className="flex items-center bg-white p-4 mb-4 border-b border-gray-200">
        <h1 className="text-xl font-bold flex-1">Active Item Groups</h1>
        <div className="flex items-center ml-4 space-x-2">
          <button onClick={handleNewItemGroupClick} className="bg-blue-500 text-white p-2 rounded flex items-center">
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

      {/* Item Groups Table */}
      <div className="bg-white p-4 shadow rounded-lg">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left">
                <input type="checkbox" />
              </th>
              <th className="py-2 px-4 border-b text-left">NAME</th>
              <th className="py-2 px-4 border-b text-left">SKU</th>
              <th className="py-2 px-4 border-b text-left">STOCK ON HAND</th>
              <th className="py-2 px-4 border-b text-left">REORDER POINT</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">
                <input type="checkbox" />
              </td>
              <td className="py-2 px-4 border-b flex items-center">
                <FontAwesomeIcon icon={faBars} className="mr-2" />
                <a href="#" className="text-blue-500">Group 1 (1 Item)</a>
              </td>
              <td className="py-2 px-4 border-b">2345345435</td>
              <td className="py-2 px-4 border-b">0.00</td>
              <td className="py-2 px-4 border-b">20</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemGroups;

