import { useContext } from "react";
import { Form, redirect } from "react-router-dom";
import { postlistcontext } from "./Postcontext";
const Createpost = () => {
 const {addnewpoststoserver}= useContext(postlistcontext)
  return (
    <div className="formcontainer">
      <Form method="POST">
        <div className="mb-3 ">
          <label htmlFor="userid" className="form-label">
            User Id
          </label>
          <input
            type="text"
            className="form-control"
            name="userId"
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
            name="title"
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
            name="body"
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
            name="reactions"
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
            name="tags"
            className="form-control"
            id="tags"
            placeholder="enter your tags with spaces"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </Form>
    </div>
  );
};
export async function createpostaction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((posts)=>console.log(posts))
    .catch((err) => console.error(err));
    
  return redirect("/");
}

export default Createpost;
