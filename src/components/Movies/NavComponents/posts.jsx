import React from "react";

const posts = ({ postId }) => {
  console.log("check", postId);
  return (
    <div>
      <h1>Posts</h1>
      Year: , Month:
      <h2>Your PostId is {postId}</h2>
    </div>
  );
};

export default posts;
