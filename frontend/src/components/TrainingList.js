import React, { useEffect, useState } from 'react';
import api from '../services/api';

const TrainingList = () => {
  const [trainings, setTrainings] = useState([]);

  const fetchTrainings = async () => {
    try {
      const response = await api.get('/trainings');
      setTrainings(response.data);
    } catch (error) {
      console.error('Помилка отримання задач:', error);
    }
  };

  useEffect(() => {
    fetchTrainings();
  }, []);

  return (
    <div>
      <h2>Список задач навчання</h2>
      {trainings.length === 0 ? (
        <p>Задач навчання не знайдено.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Назва моделі</th>
              <th>Епох</th>
              <th>Статус</th>
            </tr>
          </thead>
          <tbody>
            {trainings.map((job) => (
              <tr key={job.id}>
                <td data-label="ID">{job.id}</td>
                <td data-label="Назва моделі">{job.modelName}</td>
                <td data-label="Епох">{job.epochs}</td>
                <td data-label="Статус">{job.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button onClick={fetchTrainings}>Оновити список</button>
    </div>
  );
};

export default TrainingList;
