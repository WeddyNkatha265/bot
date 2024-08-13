import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './App.css';

function App() {
  const [army, setArmy] = useState([]);

  const handleEnlist = (bot) => {
    if (!army.some(item => item.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  const handleRelease = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
  };

  const handleDischarge = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, { method: 'DELETE' })
      .then(() => setArmy(army.filter(bot => bot.id !== botId)));
  };

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <YourBotArmy army={army} onRelease={handleRelease} onDischarge={handleDischarge} />
      <BotCollection onEnlist={handleEnlist} />
    </div>
  );
}

export default App;
