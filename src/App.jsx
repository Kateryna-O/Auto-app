// import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from '../src/pages/HomePage/HomePage';
import './App.css';
import { CatalogPage } from '../src/pages/CatalogPage/CatalogPage';
import { CamperDetailsPage } from '../src/pages/CamperDetailsPage/CamperDetailsPage';
import NotFoundPage from '../src/pages/NotFoundPage/NotFoundPage.jsx';
import { NavBar } from '../src/components/NavBar/NavBar.jsx';

// const HomePage = lazy(() => import('../src/pages/HomePage/HomePage'));
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/campers" element={<CatalogPage />} />
        <Route path="/campers/:id" element={<CamperDetailsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
