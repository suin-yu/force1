import React from 'react';
import { NavLink } from 'react-router-dom';
import './Gnb.css';

// image_c686e8.png 파일 트리에 맞춘 정확한 경로입니다.
// image_c686e8.png 파일 트리에 맞춘 정확한 경로입니다.
import homeOn from "../assets/img/home_on.png";
import homeOff from "../assets/img/home_off.png";
import teamdriverOn from "../assets/img/teamdriver_on.png";
import teamdriverOff from "../assets/img/teamdriver_off.png";
import shortsOn from "../assets/img/shorts_on.png";
import shortsOff from "../assets/img/shorts_off.png";
import communityOn from "../assets/img/community_on.png";
import communityOff from "../assets/img/community_off.png";
import myOn from "../assets/img/my_on.png";
import myOff from "../assets/img/my_off.png";

const Gnb = () => {
  const menus = [
    { path: '/home', on: homeOn, off: homeOff, name: 'home' },
    { path: '/teamdriver', on: teamdriverOn, off: teamdriverOff, name: 'teamdriver' },
    { path: '/shorts', on: shortsOn, off: shortsOff, name: 'shorts' },
    { path: '/community', on: communityOn, off: communityOff, name: 'community' },
    { path: '/my', on: myOn, off: myOff, name: 'my' },
  ];

  return (
    <nav className="gnb-container">
      <div className="gnb-border-glow"></div>
      <div className="gnb-inner">
        {menus.map((m) => (
          <NavLink key={m.name} to={m.path} className="nav-item">
            {({ isActive }) => <img src={isActive ? m.on : m.off} alt={m.name} />}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Gnb;