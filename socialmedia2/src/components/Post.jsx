import React, { useContext } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { postlistcontext } from "./Postcontext";
import Message from "./Message";
const Post = ({ post}) => {
   const {deletepost} =useContext(postlistcontext)

  return (
    <>
      <div className="post-card">
        <div className="card">
          <img src="..." className="card-img-top" alt="..." />

          <div className="card-body">
           
             
  <h5 className="card-title position-relative">
  {post.title}

  <span className="notification-badge" onClick={()=>{deletepost(post.id)}}>
   <AiTwotoneDelete />
  </span>
</h5>
          

            <p className="card-text">{post.description}</p>

            <a href="#" className="btn btn-primary">
              {post.reaction}
            </a>

            <div className="tags">
              {post.tags.map((tag) => (
                <span key={tag} className="badge">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
