import React from "react";
import postImage from './post-image.jpg'
import { BiUpArrow, BiDownArrow, BiSolidComment } from 'react-icons/bi'
import './SinglePost.css'

export default function SinglePost(props) { 
  


  const toggleVotesColor = (e) => {
    const list = e.target.closest('span').classList[0]
    const numVotes = e.target.closest('div').children[1]
    list === 'up-votes' ? numVotes.style.color = 'green' : numVotes.style.color = 'red'
}

const removeVotesColor = (e) => {
  e.target.closest('div').children[1].style.color = 'black'
}



  return (
    <section className="post">
         
        <div className="post-block">
          <div className="votes">
              <span className='up-votes'><BiUpArrow onMouseOver={toggleVotesColor}  onMouseLeave={removeVotesColor} /></span>
                <p className='num-votes'>2</p>
              <span className='down-votes'><BiDownArrow onMouseOver={toggleVotesColor}  onMouseLeave={removeVotesColor}/></span>
          </div>
          <div className="post-top">
              <h1 className="post-title">{props.title}</h1>
              <p>{props.timeAgo}</p>
          </div>
          <a  className="post-subreddit" href="#">{props.subbreddit}</a>
          <img 
                src={postImage}
                alt="post"
               />
            <div className="post-footer">
                  <p>{props.author}</p>
                  <span className="comments"><BiSolidComment /></span>
            </div>
        </div>
       
       
        <div className="post-block">
          <div className="votes">
              <span className='up-votes'><BiUpArrow/></span>
                <p className='num-votes'>2</p>
              <span className='down-votes'><BiDownArrow/></span>
          </div>
          <div className="post-top">
              <h1 className="post-title">{props.title}</h1>
              <p>{props.timeAgo}</p>
          </div>
          <a href="#"  className="post-subreddit" >{props.subbreddit}</a>
          <img 
                src={postImage}
                alt="post"
               />
            <div className="post-footer">
                  <p className="author">{props.author}</p>
                  <span className="comments"><BiSolidComment /></span>
            </div>
        </div>  
    </section>
  )
}
