import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import MyBid from './pages/My_Bid'; 
import NewLeads from './pages/New_Leads'; 
import MyPackage from './pages/Package'; 
import Booked from './Components/booked';
import All_bid from './Components/All_bid';
import Form from './Components/form'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="/mybid" element={<MyBid />} />
          <Route path="/mybid/all" element={<All_bid />} /> 
          <Route path="/mybid/booked" element={<Booked />} /> 
          <Route path="/newleads" element={<NewLeads />} />
          <Route path="/mypackage" element={<MyPackage />} />
          <Route path="/form" element={<Form />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;