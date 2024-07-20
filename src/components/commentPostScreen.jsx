import React, { useState } from "react";
import "./commentPostScreen.css";
import { postsData } from "../sampleData/postData";

function CommentPostScreen() {
  return (
    <div className="post-parent-div">
      <p className="hellow-p">Hello Jane</p>
      <p className="how-are-p">
        how are you doing today? Would you like to share something with the
        <br /> community
      </p>
      <div className="create-post-div">
        <p>Create Post</p>
        <input type="text" placeholder="How are you feeling today?" />
        <div className="post-button-div">
        <button className="post-button">Post</button>
        </div>
        
      </div>
      {postsData.map((post) => {
        return (
          <div>
            <div>
              <img src={post.image} alt="" />
              <div>
                <p>{post.name}</p>
                <p>{post.time}min ago</p>
              </div>
              <p>...</p>
            </div>
            <div>
                <p>icon</p>
                <p>{post.postMessage}</p>
            </div>
            <div>
                <p>comment icon</p>
                <p>{post.comment} comments</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CommentPostScreen;
