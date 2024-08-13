import React from 'react';
import BotCard from './BotCard';

// Component to display the user's enlisted bots
function YourBotArmy({ army, onRelease, onDischarge }) {
  return (
    <div className="your-bot-army">
      {army.map(bot => (
        <BotCard
          key={bot.id}
          bot={bot}
          onClick={() => onRelease(bot.id)}
          onDischarge={() => onDischarge(bot.id)}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
