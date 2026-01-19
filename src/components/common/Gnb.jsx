import React from 'react';
import { NavLink } from 'react-router-dom';
import './Gnb.css';
import homeOn from "../../assets/img/home_on.png";
import homeOff from "../../assets/img/home_off.png";
import teamdriverOn from "../../assets/img/teamdriver_on.png";
import teamdriverOff from "../../assets/img/teamdriver_off.png";
import shortsOn from "../../assets/img/shorts_on.png";
import shortsOff from "../../assets/img/shorts_off.png";
import communityOn from "../../assets/img/community_on.png";
import communityOff from "../../assets/img/community_off.png";
import myOn from "../../assets/img/my_on.png";
import myOff from "../../assets/img/my_off.png";

const Gnb = () => {
  const [glowKey, setGlowKey] = React.useState(0);

  const handleMenuClick = () => {
    setGlowKey(prev => prev + 1);
  };

  const menus = [
    { path: '/home', on: homeOn, off: homeOff, name: 'home' },
    { path: '/teamdriver', on: teamdriverOn, off: teamdriverOff, name: 'teamdriver' },
    { path: '/shorts', on: shortsOn, off: shortsOff, name: 'shorts' },
    { path: '/community', on: communityOn, off: communityOff, name: 'community' },
    { path: '/my', on: myOn, off: myOff, name: 'my' },
  ];

  return (
    <nav className="gnb-container">
      {/* 테두리 빛 레이어 - Key change triggers re-render & animation restart */}
      <div key={glowKey} className="gnb-border-glow"></div>
      {/* 내부 콘텐츠 레이어 */}
      <div className="gnb-inner">
        {menus.map((m) => (
          <NavLink
            key={m.name}
            to={m.path}
            className="nav-item"
            onClick={handleMenuClick}
          >
            {({ isActive }) => <img src={isActive ? m.on : m.off} alt={m.name} />}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Gnb;