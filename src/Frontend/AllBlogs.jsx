import React, { useEffect, useState } from 'react'
import Blog from '../Frontend/Blog'
import "../Frontend/Style/Blog.css"

import Navbar from "../Frontend/Navbar"
import Footer from "../Frontend/Footer"
const AllBlogs = ({loginStatus}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://backend-taxi.onrender.com/post')
          .then((response) => response.json())
          .then((data) => {
           
            setPosts(data.data); // Assuming data is an object with a "data" property containing the posts array
          })
          .catch((error) => console.error(error));
      }, []);
  return (
   <>
   { !loginStatus && <Navbar/>}
   <h1 className="blogHeading">Blogs, News, Events & Client Reviews</h1>
   <div className="DisplayBlog">
    
   {
    posts.length > 0 && posts.map(post=>(
        <Blog {...post}  />
    ))     
   }
   </div>
 {!loginStatus &&  <Footer/> } 
   </>
  )
}

export default AllBlogs
