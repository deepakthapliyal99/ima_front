import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Items from './pages/Items';
import NewItem from './pages/NewItem';
import ItemGroups from './pages/ItemGroups';
import NewItemGroup from './pages/NewItemGroup';
import InventoryAdjustments from './pages/InventoryAdjustments';
import NewInventoryAdjustment from './pages/NewInventoryAdjustment';
import Customers from './pages/Customers';
import NewCustomer from './pages/NewCustomer';
import Packages from './pages/Packages';
import SalesOrders from './pages/SalesOrders';
import NewSalesOrder from './pages/NewSalesOrder';
// Import other pages as needed

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="inventory/items" element={<Items />} />
          <Route path="inventory/items/new" element={<NewItem />} />
          <Route path="inventory/item-groups" element={<ItemGroups />} />
          <Route path="inventory/item-groups/new" element={<NewItemGroup />} />
          <Route path="inventory/inventory-adjustments" element={<InventoryAdjustments />} />
          <Route path="inventory/inventory-adjustments/new" element={<NewInventoryAdjustment />} />
          <Route path="sales/customers" element={<Customers />} />
          <Route path="sales/customers/new" element={<NewCustomer />} />
          <Route path="sales/packages" element={<Packages />} />
          <Route path="sales/sales-orders" element={<SalesOrders />} />
          <Route path="sales/sales-orders/new" element={<NewSalesOrder />} />
          {/* Add other routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;


