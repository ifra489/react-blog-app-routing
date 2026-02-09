import React from 'react'
import { posts } from '../../data'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{padding:"2rem",background:"#eef3a3" ,border:"1px solid #000000"}}>
      <h2>Blog-Post</h2>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <Link to={`/posts/${post.id}`}>Read More</Link>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home