// components/PostItem.jsx
import pic1 from '../assets/1.jpg';
// import pic2 from '../assets/2.jpg';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeart,
  faMessage,
  faRetweet,
  faEye,
  faCircleCheck
} from '@fortawesome/free-solid-svg-icons';

const PostItem = ({ post }) => {
  // Icon + label data
  const stats = [
    { icon: faHeart, label: post.likes },
    { icon: faMessage, label: post.comments },
    { icon: faRetweet, label: post.reply },
    { icon: faEye, label: post.view }
  ];

  return (
    <div className="border px-3 py-2 mb-3 mx-3 rounded">
      {/* Header: image, name + username + date */}
      <div className="d-flex align-items-start gap-3 mb-2">
        <img
          src={pic1}
          alt="Profile"
          className="rounded-circle"
          style={{ width: '50px', height: '50px' }}
        />

        <div className="flex-grow-1">
          <div className="d-flex align-items-center gap-2 flex-wrap">
            <strong>{post.name}</strong>
            <FontAwesomeIcon icon={faCircleCheck} className="text-primary" />
            <span className="text-muted">@{post.username}</span>
            <small className="text-muted ms-auto">{post.date}</small>
          </div>

          <p className="mb-2 mt-1">{post.sentence}</p>

          {/* Footer: Icons row */}
          <div className="text-muted small d-flex gap-4">
            {stats.map((item, index) => (
              <span key={index}>
                <FontAwesomeIcon icon={item.icon} className="me-1" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;

