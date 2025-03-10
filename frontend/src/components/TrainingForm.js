import React, { useState } from 'react';
import api from '../services/api';

const TrainingForm = ({ onTrainingCreated }) => {
  const [modelName, setModelName] = useState('');
  const [epochs, setEpochs] = useState(10);
  const [learningRate, setLearningRate] = useState(0.001);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/trainings', {
        modelName,
        epochs,
        learningRate,
      });
      onTrainingCreated(response.data);
      // Скидаємо форму
      setModelName('');
      setEpochs(10);
      setLearningRate(0.001);
    } catch (error) {
      console.error('Помилка запуску задачі навчання:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Запустити навчання</h2>
      <div>
        <label>Назва моделі:</label>
        <input
          type="text"
          value={modelName}
          onChange={(e) => setModelName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Кількість епох:</label>
        <input
          type="number"
          value={epochs}
          onChange={(e) => setEpochs(Number(e.target.value))}
          required
        />
      </div>
      <div>
        <label>Швидкість навчання:</label>
        <input
          type="number"
          step="0.0001"
          value={learningRate}
          onChange={(e) => setLearningRate(Number(e.target.value))}
          required
        />
      </div>
      <button type="submit">Запустити навчання</button>
    </form>
  );
};

export default TrainingForm;
