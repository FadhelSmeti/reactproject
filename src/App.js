import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './components/Card';
import './App.css';

function App() {
  const [fact, setFact] = useState('');

  useEffect(() => {
    axios.get('https://catfact.ninja/fact')
      .then(response => {
        setFact(response.data.fact);
      })
      .catch(error => console.error('Error fetching cat fact:', error));
  }, []);

  return (
    <div className="App">
      <h1>Fait Aléatoire sur les Chats</h1>
      <Card description={fact} />
    </div>
  );
}

export default App;