// components/PostBox.jsx
import React from 'react';
import pic1 from '../assets/2.jpg';

const PostBox = ({ newPost, setNewPost, handlePost, error }) => {
  return (
    <div className="mb-4 px-2">
      {/* Flex row: image + textarea */}
      <div className="d-flex align-items-start gap-3">
        <img
          src={pic1}
          alt="Profile"
          className="rounded-circle"
          style={{ width: '50px', height: '50px' }}
        />

        <textarea
          className="form-control border-0 shadow-none border-bottom"
          placeholder="What's happening?"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          maxLength={140}
          style={{ resize: 'none' }}
        />
      </div>

      {/* Character count and post button */}
      <div className="d-flex justify-content-between mt-2">
        <small className={newPost.length > 140 ? 'text-danger' : 'text-muted'}>
          {newPost.length}/140
        </small>
        <button className="btn btn-primary px-4 fs-5" onClick={handlePost}>
          Post
        </button>
      </div>

      {/* Error message */}
      {error && <div className="text-danger mt-1">{error}</div>}
    </div>
  );
};


export default PostBox;
