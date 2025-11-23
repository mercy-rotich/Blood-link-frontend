
// src/App.tsx 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import { ROUTES } from './constants';
import Layout from './components/layout/Layout';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<Layout />}>
             <Route path={ROUTES.HOME} element={<Home />} />
             {/* Add more routes as needed */}
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;