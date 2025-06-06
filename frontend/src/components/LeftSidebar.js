import React, { useState } from 'react';
import pic2 from '../assets/2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faHouse,
  faHashtag,
  faBell,
  faMessage,
  faBookmark,
  faList,
  faUser,
  faCircleInfo,
  faBagShopping,
  faUserGroup,
  faMoneyBill,
  faEllipsis,
} from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';

import "../pages/Home.css";

const menuItems = [
  { icon: faHouse, label: "Home" },
  { icon: faHashtag, label: "Trending" },
  { icon: faBell, label: "Notifications" },
  { icon: faMessage, label: "Messages" },
  { icon: faBookmark, label: "Bookmarks" },
  { icon: faList, label: "Lists" },
  { icon: faUser, label: "Profile" },
  { icon: faCircleInfo, label: "Info" },
  { icon: faBagShopping, label: "Job" },
  { icon: faUserGroup, label: "Communities" },
  { icon: faMoneyBill, label: "Premium" },
  { icon: faHandshake, label: "Verified Org" },
];

const post = { icon: faCircleInfo, label: "Post", bg: "bg-primary" };
const profileinfo = { name: 'srinija', icon: faEllipsis };

const LeftSidebar = ({ onMenuClick }) => {
  const [active, setActive] = useState('Home');

  const handleClick = (label) => {
    setActive(label);
    if (onMenuClick) onMenuClick(label); // Inform parent
  };

  return (
    <div className="px-5 leftsidecontainer-size">
      {/* Twitter Icon */}
      <div className="mb-1 px-4">
        <FontAwesomeIcon icon={faXTwitter} className="text-black fs-3" />
      </div>

      {/* Menu Items */}
      <ul className="list-unstyled d-flex flex-column gap-1">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`d-flex align-items-center gap-2 py-2 px-4 rounded-5 ${
              active === item.label ? 'fw-bold bg-light' : ''
            } hover-effect`}
            onClick={() => handleClick(item.label)}
            style={{ cursor: 'pointer' }}
          >
            <FontAwesomeIcon icon={item.icon} />
            <span className='ps-2'>{item.label}</span>
          </li>
        ))}

        <li className="d-flex align-items-center gap-2 py-2 px-4 rounded-5" style={{ backgroundColor: '#00ACEE', color: '#ffffff' }}>
          <FontAwesomeIcon icon={post.icon} />
          <span className='ps-2'>{post.label}</span>
        </li>

        <li className="d-flex align-items-center gap-2 py-2 px-4 rounded-5">
          <img src={pic2} className="rounded-circle" alt="pic" style={{ width: '50px', height: '50px' }} />
          <span className='ps-2 fs-6 pe-5'>{profileinfo.name}</span>
          <FontAwesomeIcon icon={profileinfo.icon} />
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
