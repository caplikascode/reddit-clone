import React from "react";
import './SearchBar.css'


export default function SearchBar() {
  return (
   <div className="search-bar">
    <form>
      <input
      type="text" 
      placeholder="Search for content!"
      />
    </form>
  </div>
  )
}