import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faPlus, faTh, faBars, faEllipsisH, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Items = () => {
  const navigate = useNavigate();

  const handleNewItemClick = () => {
    navigate('/inventory/items/new');
  };
  return (
    <div>
      {/* Top bar */}
      <div className="flex items-center bg-white p-4 mb-4 border-b border-gray-200">
        <h1 className="text-xl font-bold flex-1">All Items</h1>
        <div className="flex items-center ml-4 space-x-2">
          <button onClick={handleNewItemClick} className="bg-blue-500 text-white p-2 rounded flex items-center">
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

      {/* Items Table */}
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
              <th className="py-2 px-4 border-b text-left">REORDER LEVEL</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">
                <input type="checkbox" />
              </td>
              <td className="py-2 px-4 border-b flex items-center">
                <img src="path/to/image.png" alt="Item" className="w-8 h-8 mr-2" />
                <a href="#" className="text-blue-500">computer</a>
              </td>
              <td className="py-2 px-4 border-b">2345345435</td>
              <td className="py-2 px-4 border-b">100</td>
              <td className="py-2 px-4 border-b">20</td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Items;


