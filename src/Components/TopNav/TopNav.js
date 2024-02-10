import React from "react";
import { useState } from "react";
import './TopNav.css'
import logo from "./reddit_logo-removebg-preview.png"
import { useDispatch } from 'react-redux'
import { filterFromSearch } from '../Slices/postsSlice/postsSlice'

export default function TopNav()  {

     const [active,setActive] = useState(false)
     window.addEventListener("scroll", function() {
         if(this.window.scrollY > 100) {
              setActive(true);
         } else {
            setActive(false)
         }
     })

    const dispatch = useDispatch()

    const filterPosts = (e) => {
        const target = e.target
        const data = target.value
        dispatch(filterFromSearch(data))
    }



    return (
    <header className={active ? "activeNav" : ""}>
       <div className="logo">
         <img 
            src={logo}
            alt="logo"
       />  
       <p className="logo-text">Reddit</p>
      </div>
      <form className="search margin">
         <input
            type="text" 
            placeholder="Search for content!"
            onChange={filterPosts}
         />
    </form>
   </header>
    )
    
}

