import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Content from './components/Content';
import Footer from './components/Footer';
import Services from './components/ITServices';
import ITHardware from './components/ITHardware';
import ITDevelopment from './components/ITDevelopment';
import DataGridUAT from './components/DataGridUAT';

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/it-services" element={<Services />} />
        <Route path="/it-hardware" element={<ITHardware />} />
        <Route path="/it-development" element={<ITDevelopment />} />
        <Route path="/DataGridUAT" element={<DataGridUAT />}  />
      </Routes>
      <br />
      <Footer />
    </Router>
  );
}

export default App;
