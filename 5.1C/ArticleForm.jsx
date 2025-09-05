import React, { useState } from "react";

export default function ArticleForm({ setPostData }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleChange = () => {
    setPostData({ title, content });
  };

  return (
    <div className="form">
      <h2>Write an Article</h2>
      <input
        type="text"
        placeholder="Article Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          handleChange();
        }}
      />
      <textarea
        placeholder="Article Content"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
          handleChange();
        }}
      />
    </div>
  );
}
