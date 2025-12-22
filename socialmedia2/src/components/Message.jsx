import React from "react";

const Message = ({ handlefetchpostsclick }) => {
  return (
    <center>
      <div>there are no posts add posts</div>
      <button type="button" className="btn btn-outline-success" onClick={handlefetchpostsclick}>
        fetch posts
      </button>
    </center>
  );
};

export default Message;
