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

export const toggleModal = () => {
  const target = document.querySelector('.mobile-subreddits-container')
  target.style.left = target.style.left === '15px'  ? '-350px' : '15px'
  document.querySelector('.post').addEventListener('click', () => {
      target.style.left = '-350px'
  })
  }