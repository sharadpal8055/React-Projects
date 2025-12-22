import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { postlistcontext } from "./Postcontext";
import Message from "./Message";
import Loading from "./Loading";
import { useLoaderData } from "react-router-dom";

const Postlist = () => {

const postcollection=useLoaderData();
  
  return (
    <>
    
      {
        postcollection.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </>
  );
};

export const postloader = ()=>{
  return    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => {
        const formattedPosts = obj.posts.map((post) => ({
          id: post.id,
          title: post.title,
          description: post.body, // ✅ map body → description
          reaction: `${post.reactions.likes} likes`, // ✅ convert object → string
          tags: post.tags,
        }));
        return formattedPosts;
        // setfetching(false);
        // addfetchposts(formattedPosts);
      });

}
export default Postlist;
