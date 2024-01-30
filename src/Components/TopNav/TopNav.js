import React from "react";
import { useState } from "react";
import './TopNav.css'
import SearchBar from "../SearchBar/SearchBar";

export default function TopNav()  {

     const [active,setActive] = useState(false)
     window.addEventListener("scroll", function() {
         if(this.window.scrollY > 100) {
              setActive(true);
         } else {
            setActive(false)
         }
     })


    return (
    <header className={active ? "activeNav" : ""}>
     <h1 className="logo">Reddit</h1>
     <nav > 
        <SearchBar />
    </nav>
   </header>
    )
    
}

