import React, { useEffect, useState } from 'react';
import axios from 'axios';

const HelloComponent = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/hello/')
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h2>Message from Backend:</h2>
      <p>{message || 'Loading...'}</p>
    </div>
  );
};

export default HelloComponent;
