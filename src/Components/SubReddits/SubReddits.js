import React from "react";
import SingleSubReddit from "../SingleSubReddits/SingleSubReddit";
import './SubReddits.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchSubReddits, selectSubReddits } from '../Slices/subRedditsSlice/subRedditsSlice'
import { fetchActiveRedditPosts } from '../Slices/postsSlice/postsSlice'
  

export default function SubReddits() {
  const dispatch = useDispatch()
  let fetchCount = 0;
  let postsCount = 0;
  const { subReddits } = useSelector(selectSubReddits)
  
  //^ This useEffect dispatches the fetch function that API's the top 25 most popular subreddits ONE time
  useEffect(() => {
      if(fetchCount > 0) return
      dispatch(fetchSubReddits())
      fetchCount++
  }, [])

  useEffect(() => {
      if(postsCount > 0) return
      dispatch(fetchActiveRedditPosts('home'))
      postsCount++
  }, [])

  
  return (
    <div className='subreddits-container'>
        <section className='subreddits-section'>
            <h2>SUBREDDITS</h2>
            {subReddits.map((each, index) => {
                    return <SingleSubReddit name={each.name} img={each.img} key={index}/>
                })}
        </section>
    </div>
)
}
