import React from 'react';
import BotCard from './BotCard';

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
