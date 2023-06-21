import React from 'react';
import wowImage from './images/wowburning.jpg';
import wowLogo from './images/wowburninglogo.png';

const BurningCrusade = () => {
  return (
    <div className="world-of-warcraft">
        <div className="logo-burning">
<img src={wowLogo} alt="World of Warcraft Logo" />
</div>
        <div className="info-text-wow-burning">
            
      <h2>World of Warcraft</h2>
      <h2>The Burning Crusade</h2>
      <p>Welcome, hero, to the extraordinary realm of World of Warcraft: The Burning Crusade! Prepare yourself for an epic journey into the shattered realm of Outland, where new threats and untold adventures await.</p>
      
      <p>Set foot in Outland, a shattered world on the brink of annihilation. Witness the remnants of once-glorious civilizations, now scarred by demonic forces and ravaged by eternal war. Explore vast landscapes of desolate wastelands, floating islands, and otherworldly realms that defy imagination.</p>
      
      <p>Choose your path and ally with the noble Alliance or the mighty Horde as you seek to stem the tide of the Burning Legion's onslaught. Engage in relentless battles against demons, fel orcs, and other formidable adversaries who seek to unleash chaos upon the world.</p>
      
      <p>Embark on heroic quests and face daunting challenges as you venture deeper into Outland. Uncover the secrets of ancient dungeons and raid towering fortresses in pursuit of powerful treasures and legendary artifacts. Forge alliances with new allies and confront iconic villains in your quest to save Azeroth from imminent destruction.</p>
      
      <p>Discover new frontiers of power and unlock extraordinary abilities as you progress through the ranks of your chosen class. Harness the forces of light or darkness, master the arcane arts, wield powerful weapons, or call upon the primal forces of nature. Customize your character's talents and skills to suit your playstyle and become a formidable champion.</p>
      
      <p>Engage in thrilling PvP battles in arenas and battlegrounds, where skill and strategy determine victory. Compete for honor and glory against other players in intense combat scenarios or join forces with your allies to dominate the battlefield. Prove your worth and ascend the ranks to become a legendary champion of your faction.</p>
      
      <p>World of Warcraft: The Burning Crusade expands the ever-growing universe of Azeroth, offering a wealth of new content and challenges for both new and seasoned adventurers. Immerse yourself in a world of untold possibilities, where danger lurks at every turn and glory awaits those brave enough to seize it.</p>
      </div>
      
      <img src={wowImage} alt="World of Warcraft" className="background-image-wow-burning" />
      {/* Add additional content for the "World of Warcraft" option here */}
      </div>
  );
};

export default BurningCrusade;