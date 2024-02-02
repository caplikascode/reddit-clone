import React from "react";
import './SearchBar.css'
import { useDispatch } from 'react-redux'
import { filterFromSearch } from '../Slices/postsSlice/postsSlice'


export default function SearchBar() {
  const dispatch = useDispatch()

    const filterPosts = (e) => {
        const target = e.target
        const data = target.value
        dispatch(filterFromSearch(data))
    }

  
  return (
   <div className="search-bar">
    <form>
      <input
      type="text" 
      placeholder="Search for content!"
      onChange={filterPosts}
      />
    </form>
  </div>
  )
}