import React,{ useState } from 'react'
import "./feed.css"
import MessageSender from './MessageSender'
import Post from './Post'
import StoryReel from './StoryReel'
import {db } from "./Firebase"
const Feed = () => {
  const [posts, setPosts ] = useState([])
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender/>
      <Post
        profilePic="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
        message={message}
       timestamp {timestamp}
       username= {username}
        image={image}
      />
     

    </div>
  )
}

export default Feed
