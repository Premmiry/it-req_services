import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Main/Navbar';
import Content from './components/Main/Content';
import Footer from './components/Main/Footer';
import Services from './ITRequest/ITServices';
import ITHardware from './ITRequest/ITHardware';
import ITDevelopment from './ITRequest/ITDevelopment';
import DataGridUAT from './ITRequest/DataGridUAT';
import Maintanance_Client from './components/Maintanance/Maintanance_Client';
import 'primereact/resources/themes/saga-blue/theme.css';  // หรือธีมอื่น ๆ ที่คุณเลือก
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

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
        <Route path="/maintanance-client" element={<Maintanance_Client />}  />
        <Route path="/maintanance-client" element={<Maintanance_Client />}  />
        <Route path="/maintanance-client" element={<Maintanance_Client />}  />
      </Routes>
      <br />
      <Footer />
    </Router>
  );
}

export default App;
