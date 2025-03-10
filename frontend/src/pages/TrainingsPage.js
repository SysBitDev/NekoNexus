import React from 'react';
import Dashboard from '../components/Dashboard';

const TrainingsPage = () => {
  return (
    <div className="container">
      <h1>Розділ "Навчання"</h1>
      <p>Тут ви можете запускати нові задачі та переглядати список існуючих.</p>
      <Dashboard />
    </div>
  );
};

export default TrainingsPage;
