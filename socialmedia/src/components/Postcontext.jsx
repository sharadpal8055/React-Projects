import { createContext, useReducer } from "react";

export const postlistcontext = createContext();
// const postinitialstate = [
//   {
//     id: 1,
//     title: "Virat Kohli",
//     description:
//       "Virat Kohli is a GOAT-level cricketer with unmatched consistency.",
//     reaction: "1M views",
//     tags: ["king", "cheeku", "kohli", "runmachine", "india"],
//   },
//   {
//     id: 2,
//     title: "MS Dhoni",
//     description:
//       "MS Dhoni is known for calm leadership and legendary finishing.",
//     reaction: "950K views",
//     tags: ["dhoni", "msd", "captaincool", "finisher", "india"],
//   },
//   {
//     id: 3,
//     title: "Rohit Sharma",
//     description:
//       "Rohit Sharma holds the record for the highest individual ODI score.",
//     reaction: "870K views",
//     tags: ["rohit", "hitman", "opener", "sixmachine", "india"],
//   },
//   {
//     id: 4,
//     title: "Sachin Tendulkar",
//     description:
//       "Sachin Tendulkar is the God of Cricket with 100 international centuries.",
//     reaction: "2M views",
//     tags: ["sachin", "godofcricket", "legend", "masterblaster", "india"],
//   },
//   {
//     id: 5,
//     title: "Jasprit Bumrah",
//     description:
//       "Jasprit Bumrah is one of the most lethal fast bowlers in modern cricket.",
//     reaction: "620K views",
//     tags: ["bumrah", "yorkerking", "fastbowler", "deathovers", "india"],
//   },
// ];
const postinitialstate =[];
const reducermethod = (postinitialstate, action) => {
  let newpoststate = postinitialstate;
  if (action.type === "DELETE_POST") {
    newpoststate = postinitialstate.filter((post) => {
      return post.id !== action.payload.postid;
    });
  }
  else if (action.type === "ADD_POST") {
    newpoststate =[{id:Date.now(),
      title:action.payload. title,
      description:action.payload.content,
      reaction:action.payload.reactions,
      tags:action.payload.tags
      
    }, ...postinitialstate,]
  }
  else if (action.type === "ADD_FETCH_POSTS") {
    newpoststate = action.payload.posts
  }
  return newpoststate;
};

const Postlistcontextprovider = ({ children }) => {
  const [postcollection, dispatch] = useReducer(
    reducermethod,
    postinitialstate
  );
  const addpost = (userid, title, content, reactions, tags) => {
    console.log(`${userid},${title},${content},${reactions},${tags}`);
   dispatch({

    type: "ADD_POST",
    payload: {
      userid, title, content, reactions, tags
    }
   })
   
  };
  const addfetchposts = (posts) => {
   dispatch({

    type: "ADD_FETCH_POSTS",
    payload: {
     posts
    }
   })
   
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

  return (
    <>
      <postlistcontext.Provider
        value={{
          postcollection: postcollection,
          addpost: addpost,
          deletepost: deletepost,
          addfetchposts:addfetchposts
        }}
      >
        {children}
      </postlistcontext.Provider>
    </>
  );
};
export default Postlistcontextprovider;
