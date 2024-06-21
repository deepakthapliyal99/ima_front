import React, { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Layout = () => {
  const [isInventoryOpen, setInventoryOpen] = useState(false);
  const [isSalesOpen, setSalesOpen] = useState(false);
  const [isPurchasesOpen, setPurchasesOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-black text-white min-h-screen">
        <div className="p-4">
          <h1 className="text-xl font-bold">KNVM</h1>
        </div>
        <ul className="space-y-2">
          <li className="p-4 hover:bg-gray-700 flex items-center">
            <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H5v14h14v-3a1 1 0 011-1h4a1 1 0 010 2h-4a1 1 0 01-1 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4z"/></svg>
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 flex items-center justify-between cursor-pointer" onClick={() => setInventoryOpen(!isInventoryOpen)}>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8V4m-4 4h8m-8 8h8m-8 4h8M5 4a1 1 0 011-1h12a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4z"/></svg>
              Inventory
            </div>
            <FontAwesomeIcon icon={isInventoryOpen ? faChevronUp : faChevronDown} />
          </li>
          {isInventoryOpen && (
            <ul className="pl-8">
              <li className="p-2 hover:bg-gray-700">
                <Link to="/inventory/items">Items</Link>
              </li>
              <li className="p-2 hover:bg-gray-700">
                <Link to="/inventory/item-groups">Item Groups</Link>
              </li>
              <li className="p-2 hover:bg-gray-700">
                <Link to="/inventory/inventory-adjustments">Inventory Adjustments</Link>
              </li>
            </ul>
          )}
          <li className="p-4 hover:bg-gray-700 flex items-center justify-between cursor-pointer" onClick={() => setSalesOpen(!isSalesOpen)}>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-4.215A2 2 0 0016.695 11H7.305a2 2 0 00-1.9 1.785L4 17h5m6 0a2 2 0 104 0H5a2 2 0 004 0h6zM12 4v4m0 0a2 2 0 110-4z"/></svg>
              Sales
            </div>
            <FontAwesomeIcon icon={isSalesOpen ? faChevronUp : faChevronDown} />
          </li>
          {isSalesOpen && (
            <ul className="pl-8">
              <li className="p-2 hover:bg-gray-700">
                <Link to="/sales/customers">Customers</Link>
              </li>
              <li className="p-2 hover:bg-gray-700">
                <Link to="/sales/sales-orders">Sales Orders</Link>
              </li>
              <li className="p-2 hover:bg-gray-700">
                <Link to="/sales/packages">Packages</Link>
              </li>
              <li className="p-2 hover:bg-gray-700">
                <Link to="/sales/shipments">Shipments</Link>
              </li>
              <li className="p-2 hover:bg-gray-700">
                <Link to="/sales/delivery-challans">Delivery Challans</Link>
              </li>
              <li className="p-2 hover:bg-gray-700">
                <Link to="/sales/invoices">Invoices</Link>
              </li>
              <li className="p-2 hover:bg-gray-700">
                <Link to="/sales/payments-received">Payments Received</Link>
              </li>
              <li className="p-2 hover:bg-gray-700">
                <Link to="/sales/sales-returns">Sales Returns</Link>
              </li>
            </ul>
          )}
          <li className="p-4 hover:bg-gray-700 flex items-center justify-between cursor-pointer" onClick={() => setPurchasesOpen(!isPurchasesOpen)}>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 11l3-3 3 3m0 0l-3 3-3-3m3-3V7m0 4v5a2 2 0 002 2h3m-8-2a2 2 0 01-2-2V6a2 2 0 012-2h4a2 2 0 012 2v6a2 2 0 002 2h2m-4 2a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-6a2 2 0 01-2-2v-2z"/></svg>
              Purchases
            </div>
            <FontAwesomeIcon icon={isPurchasesOpen ? faChevronUp : faChevronDown} />
          </li>
          {isPurchasesOpen && (
            <ul className="pl-8">
              <li className="p-2 hover:bg-gray-700">
                <Link to="/purchases/vendors">Vendors</Link>
              </li>
              <li className="p-2 hover:bg-gray-700">
                <Link to="/purchases/expenses">Expenses</Link>
              </li>
              <li className="p-2 hover:bg-gray-700">
                <Link to="/purchases/purchase-orders">Purchase Orders</Link>
              </li>
              <li className="p-2 hover:bg-gray-700">
                <Link to="/purchases/purchase-receives">Purchase Receives</Link>
              </li>
              <li className="p-2 hover:bg-gray-700">
                <Link to="/purchases/bills">Bills</Link>
              </li>
              <li className="p-2 hover:bg-gray-700">
                <Link to="/purchases/payments-made">Payments Made</Link>
              </li>
              <li className="p-2 hover:bg-gray-700">
                <Link to="/purchases/vendor-credits">Vendor Credits</Link>
              </li>
            </ul>
          )}
          <li className="p-4 hover:bg-gray-700 flex items-center">
            <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
            <Link to="/products">Products</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 flex items-center">
            <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
            <Link to="/reports">All Reports</Link>
          </li>
          <li className="p-4 hover:bg-gray-700 flex items-center">
            <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7v14"/></svg>
            <Link to="/documents">Documents</Link>
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 bg-gray-100">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

