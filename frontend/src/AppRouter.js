import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import TrainingsPage from './pages/TrainingsPage';
import MessagesPage from './pages/MessagesPage';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/trainings" element={<TrainingsPage />} />
      <Route path="/messages" element={<MessagesPage />} />
      {/* Можна додати 404 not found тощо */}
    </Routes>
  );
};

export default AppRouter;
