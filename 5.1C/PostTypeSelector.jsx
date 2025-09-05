import React from "react";

export default function PostTypeSelector({ postType, setPostType }) {
  return (
    <div className="selector">
      <label>Choose Post Type: </label>
      <select
        value={postType}
        onChange={(e) => setPostType(e.target.value)}
      >
        <option value="">-- Select --</option>
        <option value="question">Question</option>
        <option value="article">Article</option>
      </select>
    </div>
  );
}
