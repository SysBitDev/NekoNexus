import React, { useEffect, useState } from 'react';
import api from './services/api';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    api.get('/')
      .then(response => setMessage(response.data.message))
      .catch(error => console.error('Помилка при завантаженні даних:', error));
  }, []);

  return (
    <div>
      <h1>React Frontend App</h1>
      <p>Повідомлення з API: {message}</p>
    </div>
  );
}

export default App;
