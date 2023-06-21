import React, { useState } from 'react';
import './App.css';
import GameInfo from './GameInfo';
import Community from './Community';
import backgroundimage from './images/background.png'
import WorldOfWarcraft from './worldofwarcraft';
import TheBurningCrusade from './theburningcrusade';
import WrathOfTheLichKing from './wrathofthelichking';

const App = () => {
  const [menuItems, setMenuItems] = useState([
    { id: 1, title: 'Game Info' },
    { id: 2, title: 'Expansions', options: ['World of Warcraft', 'The Burning Crusade', 'Wrath of the Lich King'] },
    { id: 3, title: 'Community' },
  ]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMenuItemClick = (id) => {
    const selectedItem = menuItems.find((item) => item.id === id);
    setSelectedItem(selectedItem);
    setIsExpanded(false); // Close the dropdown menu when clicking on any menu item

    if (selectedItem.id === 2) {
      setSelectedComponent(null);
    }
  };

  const handleDropdownItemClick = (option) => {
    setIsExpanded(false);
    setSelectedComponent(option);
  };

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div className="app">
      <div className="background" style={{ backgroundimage: `url(${backgroundimage})` }}></div>
      <div className="logo"></div>
      <div className="menu">
        <ul>
          {menuItems.map((menuItem) => (
            <li
              key={menuItem.id}
              onMouseEnter={menuItem.id === 2 ? handleMouseEnter : undefined}
              onMouseLeave={menuItem.id === 2 ? handleMouseLeave : undefined}
            >
              <button
                className={`menu-item ${selectedItem && selectedItem.id === menuItem.id ? 'active' : ''}`}
                onClick={() => handleMenuItemClick(menuItem.id)}
              >
                {menuItem.title}
              </button>
              {menuItem.id === 2 && isExpanded && (
                <ul className="dropdown-menu">
                  {menuItem.options.map((option) => (
                    <li key={option} className="dropdown-item" onClick={() => handleDropdownItemClick(option)}>
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="content">
        {selectedItem && selectedItem.id === 1 && <GameInfo />}
        {selectedItem && selectedItem.id === 2 && selectedComponent === 'World of Warcraft' && <WorldOfWarcraft />}
        {selectedItem && selectedItem.id === 2 && selectedComponent === 'The Burning Crusade' && <TheBurningCrusade />}
        {selectedItem && selectedItem.id === 2 && selectedComponent === 'Wrath of the Lich King' && <WrathOfTheLichKing />}
        {selectedItem && selectedItem.id === 3 && <Community />}
      </div>
    </div>
  );
};

export default App;