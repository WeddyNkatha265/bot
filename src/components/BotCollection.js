import React from 'react';
import BotCard from './BotCard';

function BotCollection({ bots, setArmy, army, deleteBot }) {
  const enlistBot = (bot) => {
    if (!army.find(armyBot => armyBot.id === bot.id)) {
      setArmy([...army, bot]);
    }
  };

  return (
    <div className="bot-collection">
      {bots.map(bot => (
        <BotCard
          key={bot.id}
          bot={bot}
          handleClick={() => enlistBot(bot)}
          handleDelete={() => deleteBot(bot.id)}
        />
      ))}
    </div>
  );
}

export default BotCollection;
