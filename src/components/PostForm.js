import React, { useState } from "react";
import Quill from "react-quill";
import { Redirect } from "react-router-dom";

import "react-quill/dist/quill.snow.css";

const PostForm = ({ addNewPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saved, setSaved] = useState(false);

  const handleAddNewPost = (event) => {
    event.preventDefault();
    if (title && content) {
      const post = { title: title, content: content };
      addNewPost(post);
      setSaved(true);
    } else {
      alert("Title and Content are Required!");
    }
  };

  if (saved === true) {
    return <Redirect to="/" />;
  }

  return (
    <form className="container" onSubmit={handleAddNewPost}>
      <h1>Add a New Post</h1>
      <div>
        <label htmlFor="form-title">Title:</label>
        <br />
        <input
          id="form-title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="form-content">Content:</label>
        <Quill
          onChange={(content, delta, source, editor) => {
            setContent(editor.getContents());
          }}
        />
        <button type="submit">Save</button>
      </div>
    </form>
  );
};

export default PostForm;
