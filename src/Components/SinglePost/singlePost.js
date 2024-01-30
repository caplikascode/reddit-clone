import React from "react";
import postImage from './post-image.jpg'
import { BiUpArrow, BiDownArrow } from 'react-icons/bi'
import './SinglePost.css'

export default function SinglePost(props) { 
  
  return (
    <section className="post">
         
        <div className="post-block">
          <div className="votes">
              <span className='up-votes'><BiUpArrow/></span>
                <p className='num-votes'>2</p>
              <span className='down-votes'><BiDownArrow/></span>
          </div>
          <div className="post-top">
              <h1 className="post-title">asdasd</h1>
              <p>Time ago</p>
          </div>
          <a href="#">subreddit</a>
          <img 
                src={postImage}
                alt="post"
               />
            <div className="post-footer">
                  <p>{props.author}</p>
                  <span>{props.comments}</span>
            </div>
        </div>
       
       
        <div className="post-block">
          <div className="votes">
              <span className='up-votes'><BiUpArrow/></span>
                <p className='num-votes'>2</p>
              <span className='down-votes'><BiDownArrow/></span>
          </div>
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
                  <span>Comments</span>
            </div>
        </div>  
    </section>
  )
}
