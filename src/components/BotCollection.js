import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';

// Component to display the collection of all available bots
function BotCollection({ onEnlist }) {
  const [bots, setBots] = useState([]); // State to store bots data

  // Fetch bots data from the server when the component mounts
  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data));  // Store the fetched data in the state
  }, []);

  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard key={bot.id} bot={bot} onEnlist={onEnlist} />
      ))}
    </div>
  );
}

export default BotCollection;
