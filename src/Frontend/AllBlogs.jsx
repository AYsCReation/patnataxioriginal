import React, { useEffect, useState } from 'react'
import Blog from '../Frontend/Blog'
import "../Frontend/Style/Blog.css"
const AllBlogs = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/post')
          .then((response) => response.json())
          .then((data) => {
           
            setPosts(data.data); // Assuming data is an object with a "data" property containing the posts array
          })
          .catch((error) => console.error(error));
      }, []);
  return (
   <>
   {
    posts.length > 0 && posts.map(post=>(
        <Blog {...post} />
    ))     
   }
   </>
  )
}

export default AllBlogs
