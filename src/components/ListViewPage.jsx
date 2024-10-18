import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './ListViewPage.css'; 

const ListViewPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching posts:', error));
  }, []);

  if (loading) return <div>Loading...</div>;

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="list-container">
      <h1>Posts List</h1>
      <input 
        type="text" 
        placeholder="Search posts..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        className="search-input"
      />
      <button onClick={() => navigate('/')} className="back-button">Back to Login</button>
      <div className="posts-list">
        {filteredPosts.map((post) => (
          <div className="post-card" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body.substring(0, 100)}...</p>
            <Link to={`/detail/${post.id}`} className="detail-link">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListViewPage;
