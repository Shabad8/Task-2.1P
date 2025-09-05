import React from "react";

export default function PostPreview({ postType, postData }) {
  return (
    <div className="preview">
      <h3>Preview ({postType})</h3>
      <p><strong>Title:</strong> {postData.title}</p>
      {postType === "question" && (
        <p><strong>Details:</strong> {postData.details}</p>
      )}
      {postType === "article" && (
        <p><strong>Content:</strong> {postData.content}</p>
      )}
      <button disabled>Post (Coming Soon)</button>
    </div>
  );
}
