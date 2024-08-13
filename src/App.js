import React, { useState } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import './App.css';

// Main App component
function App() {
  const [army, setArmy] = useState([]);

 // Function to handle enlisting a bot into the user's army
  const handleEnlist = (bot) => {
    // Only add the bot if it's not already in the army
    if (!army.some(item => item.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  // Function to handle releasing a bot from the user's army
  const handleRelease = (botId) => {
    setArmy(army.filter(bot => bot.id !== botId));
  };

// Function to handle discharging (deleting) a bot 
  const handleDischarge = (botId) => {
    // Send a DELETE request to the server
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
