import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTh, faBars, faEllipsisH, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

const Packages = () => {
  const navigate = useNavigate();

  const handleNewPackageClick = () => {
    navigate('/sales/packages/new');
  };

  return (
    <div>
      {/* Top bar */}
      <div className="flex items-center bg-white p-4 mb-4 border-b border-gray-200">
        <h1 className="text-xl font-bold flex-1">All Packages</h1>
        <div className="flex items-center ml-4 space-x-2">
          <button onClick={handleNewPackageClick} className="bg-blue-500 text-white p-2 rounded flex items-center">
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

      {/* Packages Section */}
      <div className="flex space-x-4">
        <div className="flex-1 bg-blue-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Packages, Not Shipped</h2>
          <div className="bg-white p-4 shadow rounded-lg">
            <div className="flex items-center space-x-4">
              <input type="checkbox" />
              <div>
                <a href="#" className="text-blue-500">Mr. Deepak Kumar</a>
                <p className="text-sm">skv-pkg2 | SO-00002</p>
                <p className="text-sm">19/06/2024</p>
              </div>
              <p className="text-sm">1.00</p>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-yellow-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Shipped Packages</h2>
          <div className="bg-white p-4 shadow rounded-lg">
            <div className="flex items-center space-x-4">
              <input type="checkbox" />
              <div>
                <a href="#" className="text-blue-500">Mr. Deepak Kumar</a>
                <p className="text-sm">skv-pkg1 | SO-00001</p>
                <p className="text-sm">17/06/2024</p>
              </div>
              <p className="text-sm">1.00</p>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-green-100 p-4 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Delivered Packages</h2>
          <div className="bg-white p-4 shadow rounded-lg">
            <p className="text-sm text-gray-500">No Records Found</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
