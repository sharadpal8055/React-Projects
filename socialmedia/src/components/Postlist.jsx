import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { postlistcontext } from "./Postcontext";
import Message from "./Message";
import Loading from "./Loading";

const Postlist = () => {
  const [fetching, setfetching] = useState(false);
  const { postcollection } = useContext(postlistcontext);
  const { addfetchposts } = useContext(postlistcontext);
  useEffect(() => {
    setfetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((obj) => {
        const formattedPosts = obj.posts.map((post) => ({
          id: post.id,
          title: post.title,
          description: post.body, // ✅ map body → description
          reaction: `${post.reactions.likes} likes`, // ✅ convert object → string
          tags: post.tags,
        }));
        setfetching(false);
        addfetchposts(formattedPosts);
      });

    return () => {
      console.log("ueeffect cleanup");
    };
  }, []);
  // const handlefetchpostsclick = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then(res => res.json())
  //     .then((obj) => {
  //       const formattedPosts = obj.posts.map(post => ({
  //         id: post.id,
  //         title: post.title,
  //         description: post.body,        // ✅ map body → description
  //         reaction: `${post.reactions.likes} likes`, // ✅ convert object → string
  //         tags: post.tags
  //       }));

  //       addfetchposts(formattedPosts);
  //     });
  // };

  // if (postcollection.length === 0) {
  //     return <Message handlefetchpostsclick={handlefetchpostsclick} />;
  //   }

  if (postcollection.length === 0 && !fetching) {
    return <Message />;
  }
  return (
    <>
      {fetching && <Loading />}
      {!fetching &&
        postcollection.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </>
  );
};

export default Postlist;
