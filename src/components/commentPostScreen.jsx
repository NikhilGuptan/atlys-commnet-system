import React, { useState } from "react";
import "./commentPostScreen.css";
import { postsData } from "../sampleData/postData";
import { MdOutlineModeComment } from "react-icons/md";
import HandImage  from "../images/hand-iocn.png";
import MessageIcon from "../images/message.png";

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
        <div className="image-and-input">
        <img src={MessageIcon} alt="" className="hand-image" />
        <input type="text" placeholder="How are you feeling today?" />
        </div>
        
        <div className="post-button-div">
          <button className="post-button">Post</button>
        </div>
      </div>
      {postsData.map((post) => {
        return (
          <div className="post-parent">
            <div className="post-child-1">
              <div className="image-div">
              <img className="post-image" src={post.image} alt="" />
              </div>
              <div className="name-div">
                <p className="name-p">{post.name}</p>
                <p className="post-minute">{post.time}min ago</p>
              </div>
              <p className="dot-p">...</p>
            </div>
            <div className="post-child-2">
                <img src={HandImage} alt="" className="hand-image" />
              <p>{post.postMessage}</p>
            </div>
            <div className="post-child-3">
            <div>
            <MdOutlineModeComment />
            </div>
              <p>{post.comment} comments</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CommentPostScreen;
