import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DetailViewPage.css'; 

const DetailViewPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching post details:', error));
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="detail-container">
      <button onClick={() => navigate(-1)}>Back to List</button>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default DetailViewPage;