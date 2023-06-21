import React from 'react';
import wowImage from './images/wowwrath.jpg';
import wowLogo from './images/wowwrathlogo.png';

const WrathOfTheLichKing = () => {
  return (
    <div className="world-of-warcraft">
        <div className="logo-wrath">
<img src={wowLogo} alt="World of Warcraft Logo" />
</div>
        <div className="info-text-wow-wrath">
            
      <h2>World of Warcraft</h2>
      <h2>Wrath of the Lich King</h2>
      <p>Welcome, adventurer, to the chilling realm of World of Warcraft: Wrath of the Lich King! Brace yourself for a harrowing journey into the frozen wastes of Northrend, where the fearsome Lich King awaits to test your mettle.</p>
      
      <p>Set foot in Northrend, a land perpetually covered in ice and snow, shrouded in darkness and filled with ancient mysteries. Explore towering citadels, treacherous frozen landscapes, and haunted ruins as you uncover the secrets that lie beneath the icy surface.</p>
      
      <p>Choose your allegiance and join the valiant Alliance or the relentless Horde as they rally their forces to challenge the might of the Lich King. Prepare to face an army of undead minions, savage beasts, and corrupted beings as you fight to liberate Northrend from the grasp of darkness.</p>
      
      <p>Embark on perilous quests and delve into treacherous dungeons that test your skills and resolve. Confront the horrors of Icecrown Citadel and challenge the Lich King himself in epic raid encounters. Uncover the truth behind the Scourge's dark plans and put an end to the Lich King's reign of terror.</p>
      
      <p>Discover new powers and master powerful abilities as you progress through the ranks of your chosen class. Harness the forces of frost, necromancy, or wield mighty weapons infused with ancient enchantments. Unlock new talents and customize your character's path to become a legendary hero of Azeroth.</p>
      
      <p>Engage in intense PvP battles in the frozen arenas and battlegrounds of Northrend. Prove your skill and cunning as you face off against other players in strategic combat scenarios or engage in large-scale battles for control over key objectives. Rise to the top and claim your place among the heroes of the frozen north.</p>
      
      <p>World of Warcraft: Wrath of the Lich King expands the ever-evolving saga of Azeroth, introducing a wealth of new content and challenges for adventurers. Traverse the frigid landscapes, confront the horrors of the Scourge, and become a champion in the fight against the Lich King's tyranny.</p>
      
      </div>
      
      <img src={wowImage} alt="World of Warcraft" className="background-image-wow-wrath" />
      {/* Add additional content for the "World of Warcraft" option here */}
      </div>
  );
};

export default WrathOfTheLichKing;