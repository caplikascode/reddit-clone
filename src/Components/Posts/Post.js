import React from "react";
import postImage from './post-image.jpg'

export default function Post() {
  return (
    <section className="Posts">
        <div className="post-block">
          <div className="post-top">
              <h1 className="post-title">Post title</h1>
              <p>Time ago</p>
          </div>
          <a href="#">subreddit</a>
          <img 
                src={postImage}
                alt="post"
               />
            <div className="post-footer">
                  <p>Post Author</p>
                  <a href="#">comment icon</a>
            </div>
        </div>
        <div className="post-block">
          <div className="post-top">
              <h1 className="post-title">Post title</h1>
              <p>Time ago</p>
          </div>
          <a href="#">subreddit</a>
          <img 
                src={postImage}
                alt="post"
               />
            <div className="post-footer">
                  <p>Post Author</p>
                  <a href="#">comment icon</a>
            </div>
        </div>
    </section>
  )
}
