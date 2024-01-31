import React from "react";
import SinglePost from "../SinglePost/singlePost";
import './PostSection.css'


export default function PostSection(props) {
   return (
    <section className="post-section">
        <SinglePost title="Coding" timeAgo="2hrs" subbreddit="r/codeacademy" author="viliuscaplikas" />
    </section>
    
   )
}
       
