import React from 'react'
import { useParams, Link , Navigate } from 'react-router-dom';
import {useState, useEffect} from 'react';
import '../Frontend/Style/PostPage.css'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'
import Navbar from "../Frontend/Navbar"
import Footer from "../Frontend/Footer"
TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)
const PostPage = ({loginStatus}) => {
    
    const [postInfo, setPostInfo] = useState(null);
    const {customUrl} = useParams();
    const [redirect , setRedirect] = useState(false);
    useEffect(() => {
        fetch(`https://backend-taxi.onrender.com/post/${customUrl}`)
            .then(response => response.json())
            .then(data => {
                setPostInfo(data);
            })
            .catch(error => {
                // Handle error if necessary
            });
    }, [customUrl]);

    const handleDeleteField = (id) => {
        // Make a DELETE request to the server to delete the field
        fetch(`https://backend-taxi.onrender.com/post/${id}`, {
          method: 'DELETE',
        })
          .then((res) => res.json())
          .then((data) => {
            setRedirect(true);
            alert("Blog post deleted successfully!"); // Log the response message
             // Fetch the updated data after successful deletion
          })
          .catch((error) => {
            console.error('Error deleting field:', error);
          });


          
      };
      if (redirect){
        return <Navigate to={'/AllBlogs'}/>
    }
    console.log(customUrl);
  

    if (!postInfo) return '';
console.log(loginStatus);
  return (
   <>
   <Navbar loginStatus={loginStatus} />
   <div className="post-page">
    <h1>{postInfo.title}</h1>
    { 
       loginStatus && (
        <>
       
<Link to={`/edit/${postInfo.customUrl}`} class="button-40" role="button">Edit Post</Link>
<button className='button-40' onClick={() => handleDeleteField(postInfo._id)}> Delete</button>
<br />
        </>
       )
    }
    {/* <time>{<ReactTimeAgo date={postInfo.createdAt} />}</time> */}
    <a href="" className="author"> by {postInfo.author} </a>
    <div className="image-post">
        <img src={`https://backend-taxi.onrender.com/${postInfo.cover}`} alt="" />
    </div>
   <div dangerouslySetInnerHTML={{__html:postInfo.content}}/>  
   </div>
   <Footer/>
   </>
  )
}

export default PostPage
