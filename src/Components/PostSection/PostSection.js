import React from "react";
import SinglePost from "../SinglePost/singlePost";
import './PostSection.css'
import { useSelector } from "react-redux";
import { selectActiveRedditPosts } from "../Slices/postsSlice/postsSlice";

export default function PostSection(props) {

    const { filteredPosts } = useSelector(selectActiveRedditPosts)

    return (
        <section className='post-section'>
            {filteredPosts.map((post, index) => {
                return (
                    <SinglePost title={post.title} text={post.text} img={post.img} author={post.author} timeAgo={post.timeSince} comments={post.comments} upVotes={post.upVotes} downVotes={post.downVotes} key={index}/>
                )
            })}
        </section>
    )
    
   
}
       
