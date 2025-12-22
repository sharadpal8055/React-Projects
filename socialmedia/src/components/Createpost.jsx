import React, { useContext, useRef } from "react";
import { postlistcontext } from "./Postcontext";


const Createpost = () => {
   const {addpost}=useContext(postlistcontext)
  const useridelement =useRef("")
  const titleelement =useRef("")
  const contentelement =useRef("")
  const reactionselement =useRef("")
  const tagselement =useRef("")


  const handlesubmit=(event)=>{
    event.preventDefault();
    const userid=  useridelement.current.value
    const title=  titleelement.current.value
    const content=  contentelement.current.value
    const reactions= reactionselement.current.value
    const tags= tagselement.current.value.split(' ')
addpost(userid,title,content,reactions,tags)
useridelement.current.value = "";
  titleelement.current.value = "";
  contentelement.current.value = "";
  reactionselement.current.value = "";
  tagselement.current.value = "";
  
  }
  return (
    <div className="formcontainer">
      <form onSubmit={handlesubmit}>
        <div className="mb-3 ">
          <label htmlFor="userid" className="form-label">
         User Id
          </label>
          <input
            type="text"
            className="form-control"
            ref={useridelement}
            id="userid"
           placeholder="Enter your id"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="title" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            className="form-control"
            ref={titleelement}
            id="title"
           placeholder="how are you feeling..."
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="content" className="form-label">
            Post content
          </label>
          <input
            type="text"
            ref={contentelement}
            className="form-control"
            id="content"
           placeholder="tell me about more"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="reactions" className="form-label">
            Reactions
          </label>
          <input
            type="text"
            ref={reactionselement}
            className="form-control"
            id="reactions"
           placeholder="how many people reacted"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="tags" className="form-label">
           Tags
          </label>
          <input
            type="text"
            ref={tagselement}
            className="form-control"
            id="tags"
           placeholder="enter your tags with spaces"
          />
        </div>
       
        
        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </div>
  );
};

export default Createpost;
