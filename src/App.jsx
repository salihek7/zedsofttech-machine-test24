import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ListViewPage from './components/ListViewPage';
import DetailViewPage from './components/DetailViewPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/list" element={<ListViewPage />} />
        <Route path="/detail/:id" element={<DetailViewPage />} />
      </Routes>
    </Router>
  );
};

export default App;