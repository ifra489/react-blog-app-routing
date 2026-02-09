import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { posts} from '../../data'

const PostDetails = () => {
    const {postId}=useParams();

    const navigate=useNavigate();
    

    const postDetail = posts.find((post) => post.id === parseInt(postId));

    if(!postDetail){
        return <div>Post not found</div>
    }
  return (
    <div style={{padding:"1rem",background:"#f8c3f4"}}>
      <h2>{postDetail.title}</h2>
      <p>{postDetail.description}</p>
      <button style={{background:"#008839", color:"white"}} onClick={()=>navigate("/")}>Go Back</button>
    </div>
  )
}

export default PostDetails