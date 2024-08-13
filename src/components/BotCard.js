import React from 'react';

// Component to display individual bot details
function BotCard({ bot, onEnlist, onClick, onDischarge }) {
  return (
    <div className="bot-card">
      <h3>{bot.name}</h3>
      <img src={bot.avatar_url} alt={bot.name} className="bot-avatar" />
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <p>Class: {bot.bot_class}</p>
      <p>{bot.catchphrase}</p>
      {onEnlist && <button onClick={() => onEnlist(bot)}>Enlist</button>}
      {onClick && <button onClick={onClick}>Release</button>}
      {onDischarge && (
        <button onClick={onDischarge} style={{ color: 'red' }}>
          Discharge : X
        </button>
      )}
    </div>
  );
}

export default BotCard;
