import React, { useState } from 'react';
import TrainingForm from './TrainingForm';
import TrainingList from './TrainingList';

const Dashboard = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleTrainingCreated = () => {
    setRefreshKey((prevKey) => prevKey + 1);
  };

  return (
    <div>
      <TrainingForm onTrainingCreated={handleTrainingCreated} />
      {/* Ключ спричиняє перезавантаження компонента TrainingList */}
      <TrainingList key={refreshKey} />
    </div>
  );
};

export default Dashboard;
