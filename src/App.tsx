import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import CMTool from './pages/CMTool';
import PRBManagement from './pages/PRBManagement';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cmtool" element={<CMTool />} />
          <Route path="/prb-management" element={<PRBManagement />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;