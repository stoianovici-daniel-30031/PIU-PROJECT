import React from 'react';
import wowImage from './images/wow.jpg';
import wowLogo from './images/wowclassic.png';

const WorldOfWarcraft = () => {
  return (
    <div className="world-of-warcraft">
        <div className="logo-classic">
<img src={wowLogo} alt="World of Warcraft Logo" />
</div>
        <div className="info-text-wow">
            
      <h2>World of Warcraft</h2>
      <p>Welcome, adventurer, to the realm of World of Warcraft Vanilla! Prepare yourself for an extraordinary journey into the mystical lands of Azeroth, where heroes are born and legends unfold.
In this era of the game, you will delve into a world untouched by the passage of time. </p>

<p>Immerse yourself in the raw, untamed beauty of Azeroth as it was in its earliest days. From the verdant forests of Elwynn to the harsh deserts of Durotar, every step you take will be filled with wonder and danger.
Choose your path wisely, for within Vanilla WoW, you will face a myriad of challenges. </p>

<p>Align yourself with one of the noble Alliance races such as Humans, Dwarves, or Elves, or join the mighty Horde comprised of Orcs, Trolls, and Tauren. Each race carries a unique heritage, strengths, and weaknesses, shaping your destiny in this grand adventure.
Forge your identity as a valiant warrior, a wise mage, a stealthy rogue, or one of the many other classes available.</p> 

<p>Hone your skills and master powerful abilities as you rise in power and stature. Whether you charge headfirst into battle, command the elements, or heal the wounded, your role in this world is vital.
Prepare to unravel the secrets of Azeroth through epic quests that will test your mettle and take you to the far corners of the realm. Seek out ancient artifacts, battle fearsome creatures, and confront legendary foes in your pursuit of glory and honor.</p> 

<p>But beware, for Azeroth is not a realm devoid of conflict. Engage in fierce battles against rival factions in the open world or compete for dominance in battlegrounds. Join forces with fellow adventurers in dungeons and raids, where teamwork and strategy are paramount. Only the strongest and most cunning will prevail.
Throughout your journey, you will encounter a rich tapestry of characters, both friend and foe. From the wise and enigmatic leaders to the downtrodden commoners, their stories will intertwine with your own, leaving an indelible mark on your memories.</p>

<p>World of Warcraft Vanilla captures the essence of a bygone era, where discovery and exploration were the guiding forces. It is a time of untamed wilderness and uncharted territories, where the bonds of friendship and camaraderie are forged in the crucible of adventure.
So, step forth, brave hero, and embark on this grand odyssey through World of Warcraft Vanilla. Uncover the mysteries, experience the thrill of the unknown, and etch your name into the annals of Azeroth's history. The realm awaits your arrival.</p></div>
      
      <img src={wowImage} alt="World of Warcraft" className="background-image-wow" />
      {/* Add additional content for the "World of Warcraft" option here */}
      </div>
  );
};

export default WorldOfWarcraft;