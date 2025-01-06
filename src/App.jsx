import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import MyBid from './pages/My_Bid'; // Ensure this path is correct
import NewLeads from './pages/New_Leads'; // Ensure this path is correct
import MyPackage from './pages/Package'; // Ensure this path is correct

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="mybid" element={<MyBid />} />
          <Route path="newleads" element={<NewLeads />} />
          <Route path="mypackage" element={<MyPackage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;