
// /**
//  * 
//  *  since MainFeed is used to fetch the data of other using dummy one using json backend
//  * It should contain the  profile pic,name,no of hour post,tweet text(140 char),comments(icon),retweets(icon,count),like(icon ,count),forward(icon only)
//  */




import React, { useEffect, useState } from 'react';
import MainFeedTop from './MainFeedTop';
import PostBox from './PostBox';
import PostItem from './PostItem';

const MainFeed = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5500/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data.slice(0, 150)))
      .catch(err => console.log('Error fetching posts', err));
  }, []);

  const handlePost = () => {
    if (newPost.length === 0 || newPost.length > 140) {
      setError('Post must be between 1–140 characters');
      return;
    }

    const newPostObj = {
      id: posts.length + 1,
      name: 'You',
      username: 'you',
      date: new Date().toLocaleDateString(),
      sentence: newPost,
      likes: 0,
      comments: 0,
      reply: 0,
      view: 0,
    };

    setPosts([newPostObj, ...posts]);
    setNewPost('');
    setError('');
  };

  return (
    <div style={{ height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
      {/* Sticky Top */}
      <div style={{ position: 'sticky', top: 0, zIndex: 10, background: 'white' }} className="py-3">
        <MainFeedTop />
      </div>

      {/* Scrollable Feed */}
      <div style={{ overflowY: 'auto', flex: 1, paddingBottom: '1rem' }}>
        <PostBox
          newPost={newPost}
          setNewPost={setNewPost}
          handlePost={handlePost}
          error={error}
        />
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default MainFeed;


