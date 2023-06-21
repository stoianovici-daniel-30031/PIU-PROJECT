import React, { useState, useEffect } from 'react';
import './Community.css';

const Community = () => {
  const [communityData, setCommunityData] = useState([]);

  useEffect(() => {
    // Load data from localStorage on component mount
    const storedData = localStorage.getItem('communityData');
    if (storedData) {
      setCommunityData(JSON.parse(storedData));
    }
  }, []);

  const [editingId, setEditingId] = useState(null);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostContent, setNewPostContent] = useState('');

  const handleDelete = (postId) => {
    const updatedData = communityData.filter((post) => post.id !== postId);
    setCommunityData(updatedData);
    localStorage.setItem('communityData', JSON.stringify(updatedData));
  };

  const handleEdit = (postId) => {
    setEditingId(postId);
  };

  const handleSave = (postId) => {
    const updatedData = communityData.map((post) => {
      if (post.id === postId) {
        return { ...post, title: newPostTitle, content: newPostContent };
      }
      return post;
    });
    setCommunityData(updatedData);
    localStorage.setItem('communityData', JSON.stringify(updatedData));
    setEditingId(null);
    setNewPostTitle('');
    setNewPostContent('');
  };

  const handleCancel = () => {
    setEditingId(null);
    setNewPostTitle('');
    setNewPostContent('');
  };

  const handleAdd = () => {
    const newPost = {
      id: Date.now(),
      title: newPostTitle,
      content: newPostContent,
    };
    setCommunityData([...communityData, newPost]);
    localStorage.setItem(
      'communityData',
      JSON.stringify([...communityData, newPost])
    );
    setNewPostTitle('');
    setNewPostContent('');
  };

  return (
    <div className="background-set">
      <div className="community-container">
        <h2>Community Content</h2>
        <div className="posts-container">
          {communityData.map((post) => (
            <div key={post.id} className="post">
              {editingId === post.id ? (
                <div className="edit-post">
                  <input
                    type="text"
                    value={newPostTitle}
                    onChange={(e) => setNewPostTitle(e.target.value)}
                    placeholder="Title"
                  />
                  <textarea
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    placeholder="Content"
                  ></textarea>
                  <button onClick={() => handleSave(post.id)}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </div>
              ) : (
                <div>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                  <div className="post-actions">
                    <button onClick={() => handleEdit(post.id)}>Edit</button>
                    <button onClick={() => handleDelete(post.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="new-post-container">
          <h3>Add New Post</h3>
          <input
            type="text"
            value={newPostTitle}
            onChange={(e) => setNewPostTitle(e.target.value)}
            placeholder="Title"
          />
          <textarea
            value={newPostContent}
            onChange={(e) => setNewPostContent(e.target.value)}
            placeholder="Content"
          ></textarea>
          <button onClick={handleAdd}>Add Post</button>
        </div>
      </div>
    </div>
  );
};

export default Community;
