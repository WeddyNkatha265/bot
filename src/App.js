import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data));
  }, []);

  const deleteBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE'
    })
    .then(() => {
      setArmy(army.filter(bot => bot.id !== botId));
      setBots(bots.filter(bot => bot.id !== botId));
    });
  };

  return (
    <div className="App">
      <YourBotArmy army={army} setArmy={setArmy} deleteBot={deleteBot} />
      <BotCollection bots={bots} setArmy={setArmy} army={army} deleteBot={deleteBot} />
    </div>
  );
}

export default App;
