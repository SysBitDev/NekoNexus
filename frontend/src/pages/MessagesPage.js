import React, { useEffect, useState } from 'react';
import api from '../services/api';

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);
  const [singleMessage, setSingleMessage] = useState('');

  // Отримати приклад одного повідомлення (GET /api/messages/)
  const fetchSingleMessage = async () => {
    try {
      const response = await api.get('/messages');
      setSingleMessage(response.data.message);
    } catch (error) {
      console.error('Помилка отримання повідомлення:', error);
    }
  };

  // Отримати список повідомлень (GET /api/messages/all)
  const fetchAllMessages = async () => {
    try {
      const response = await api.get('/messages/all');
      setMessages(response.data);
    } catch (error) {
      console.error('Помилка отримання списку повідомлень:', error);
    }
  };

  useEffect(() => {
    fetchSingleMessage();
    fetchAllMessages();
  }, []);

  return (
    <div className="container">
      <h1>Розділ "Повідомлення"</h1>

      <h2>Одне повідомлення:</h2>
      {singleMessage ? (
        <p>{singleMessage}</p>
      ) : (
        <p>Немає повідомлення</p>
      )}

      <h2>Список повідомлень:</h2>
      {messages && messages.length > 0 ? (
        <ul>
          {messages.map((msg, idx) => (
            <li key={idx}>{msg}</li>
          ))}
        </ul>
      ) : (
        <p>Немає повідомлень</p>
      )}
    </div>
  );
};

export default MessagesPage;
