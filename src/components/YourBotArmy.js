import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ army, setArmy, deleteBot }) {
  const releaseBot = (bot) => {
    setArmy(army.filter(armyBot => armyBot.id !== bot.id));
  };

  return (
    <div className="your-bot-army">
      {army.map(bot => (
        <BotCard
          key={bot.id}
          bot={bot}
          handleClick={() => releaseBot(bot)}
          handleDelete={() => deleteBot(bot.id)}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
