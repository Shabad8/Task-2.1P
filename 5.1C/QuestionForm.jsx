import React, { useState } from "react";

export default function QuestionForm({ setPostData }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleChange = () => {
    setPostData({ title, details });
  };

  return (
    <div className="form">
      <h2>Post a Question</h2>
      <input
        type="text"
        placeholder="Question Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          handleChange();
        }}
      />
      <textarea
        placeholder="Question Details"
        value={details}
        onChange={(e) => {
          setDetails(e.target.value);
          handleChange();
        }}
      />
    </div>
  );
}
