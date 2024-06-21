import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

// Register the necessary components
Chart.register(...registerables);

const Dashboard = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Direct Sales',
        data: [0, 0, 0, 0, 0, 23520],
        borderColor: 'rgba(59, 130, 246, 1)',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        fill: true,
        tension: 0.4
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        type: 'linear'
      }
    }
  };

  return (
    <div>
      {/* Top bar */}
      
      <div className="flex items-center bg-white p-4 mb-4 border-b border-gray-200">
        <h1 className="text-xl font-bold flex-1">Dashboard</h1>
        <div className="flex items-center ml-4 space-x-2">
          <button className="bg-blue-500 text-white p-2 rounded">+ New</button>
          <button className="bg-gray-200 p-2 rounded">...</button>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Sales Activity */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Sales Activity</h2>
          <div className="flex justify-between items-center">
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-600">TO BE PACKED</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-600">TO BE SHIPPED</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">1</p>
              <p className="text-gray-600">PENDING</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-600">TO BE INVOICED</p>
            </div>
          </div>
        </div>

        {/* Inventory Summary */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Inventory Summary</h2>
          <div className="flex justify-between items-center">
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-600">QUANTITY IN HAND</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-600">QUANTITY TO BE RECEIVED</p>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Product Details</h2>
          <div className="flex justify-between items-center">
            <div className="text-center">
              <p className="text-2xl font-bold text-red-500">0</p>
              <p className="text-gray-600">Low Stock Items</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-600">All Item Groups</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">1</p>
              <p className="text-gray-600">All Items</p>
            </div>
          </div>
        </div>

        {/* Active Items */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Active Items</h2>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
              <p className="text-2xl font-bold">100%</p>
            </div>
          </div>
        </div>

        {/* Top Selling Items */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Top Selling Items</h2>
          <p className="text-gray-600">No items were invoiced in this time frame</p>
        </div>

        {/* Purchase Order */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Purchase Order</h2>
          <p className="text-gray-600">This Month</p>
          <div className="flex justify-between items-center">
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-600">Quantity Ordered</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">₹0.00</p>
              <p className="text-gray-600">Total Cost</p>
            </div>
          </div>
        </div>

        {/* Sales Order */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Sales Order</h2>
          <p className="text-gray-600">This Month</p>
          <div className="grid grid-cols-6 gap-2">
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-600">Channel</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-600">Draft</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-600">Confirmed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-600">Packed</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">0</p>
              <p className="text-gray-600">Shipped</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">1</p>
              <p className="text-gray-600">Invoiced</p>
            </div>
          </div>
        </div>

        {/* Sales Order Summary */}
        <div className="bg-white p-4 shadow rounded-lg col-span-1 md:col-span-2 lg:col-span-3">
          <h2 className="text-lg font-semibold mb-4">Sales Order Summary (INR)</h2>
          <div className="w-full">
            <Line data={data} options={options} />
          </div>
          <div className="mt-4 text-center">
            <p className="text-2xl font-bold">₹23,520.00</p>
            <p className="text-gray-600">Total Sales</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
