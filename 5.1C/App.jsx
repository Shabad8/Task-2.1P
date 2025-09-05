import React, { useState } from "react";
import "./styles.css";   
import PostTypeSelector from "./components/PostTypeSelector";
import QuestionForm from "./components/QuestionForm";
import ArticleForm from "./components/ArticleForm";
import PostPreview from "./components/PostPreview";

export default function App() {
  const [postType, setPostType] = useState("");
  const [postData, setPostData] = useState({});

  return (
    <div className="app-container">
      <h1>New Post Page</h1>
      <PostTypeSelector postType={postType} setPostType={setPostType} />

      {postType === "question" && (
        <QuestionForm setPostData={setPostData} />
      )}

      {postType === "article" && (
        <ArticleForm setPostData={setPostData} />
      )}

      {postType && <PostPreview postType={postType} postData={postData} />}
    </div>
  );
}
