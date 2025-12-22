import { createContext, useReducer, useState, useEffect } from "react";

export const postlistcontext = createContext();

const postinitialstate = [];
const reducermethod = (postinitialstate, action) => {
  let newpoststate = postinitialstate;
  if (action.type === "DELETE_POST") {
    newpoststate = postinitialstate.filter((post) => {
      return post.id !== action.payload.postid;
    });
  } else if (action.type === "ADD_NEW_POSTSTOSERVER") {
    const p = action.payload.posts;
    newpoststate = [
      {
        id: p.id,
        title: p.title,
        description: p.body,
        reaction: `${p.reactions} likes`,
        tags: p.tags ?? [],
      },
      ...postinitialstate,
    ];
  } else if (action.type === "ADD_FETCH_POSTS") {
    newpoststate = action.payload.posts;
  }
  return newpoststate;
};

const Postlistcontextprovider = ({ children }) => {
  const [postcollection, dispatch] = useReducer(
    reducermethod,
    postinitialstate
  );
  const [fetching, setfetching] = useState(false);
  const addfetchposts = (posts) => {
    dispatch({
      type: "ADD_FETCH_POSTS",
      payload: {
        posts,
      },
    });
  };
  const addnewpoststoserver = (posts) => {
    dispatch({
      type: "ADD_NEW_POSTSTOSERVER",
      payload: {
        posts,
      },
    });
  };
  const deletepost = (postid) => {
    console.log(`delete icon has been clicked for id: ${postid}`);
    dispatch({
      type: "DELETE_POST",
      payload: {
        postid: postid,
      },
    });
  };

  useEffect(() => {
    setfetching(true);
    // fetch("https://dummyjson.com/posts")
    //   .then((res) => res.json())
    //   .then((obj) => {
    //     const formattedPosts = obj.posts.map((post) => ({
    //       id: post.id,
    //       title: post.title,
    //       description: post.body, // ✅ map body → description
    //       reaction: `${post.reactions.likes} likes`, // ✅ convert object → string
    //       tags: post.tags,
    //     }));
    //     setfetching(false);
    //     addfetchposts(formattedPosts);
    //   });

    return () => {
      console.log("ueeffect cleanup");
    };
  }, []);

  return (
    <>
      <postlistcontext.Provider
        value={{
          postcollection: postcollection,
          fetching: fetching,
          deletepost: deletepost,
          addfetchposts: addfetchposts,
          addnewpoststoserver: addnewpoststoserver,
        }}
      >
        {children}
      </postlistcontext.Provider>
    </>
  );
};
export default Postlistcontextprovider;
