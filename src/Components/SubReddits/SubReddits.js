import React from "react";
import SingleSubReddit from "../SingleSubReddits/SingleSubReddit";
import './SubReddits.css'



  

export default function SubReddits() {
  
 
  
  return (
    <div className='subreddits-container'>
        <section className='subreddits-section'>
            <h2>SUBREDDITS</h2>
              <SingleSubReddit />
        </section>
    </div>
)
}
