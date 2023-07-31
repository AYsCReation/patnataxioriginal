import React from 'react'
import { useParams, Link } from 'react-router-dom';
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
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then(response => response.json())
            .then(data => {
                setPostInfo(data);
            })
            .catch(error => {
                // Handle error if necessary
            });
    }, [id]);

    if (!postInfo) return '';
console.log(loginStatus);
  return (
   <>
   <Navbar/>
   <div className="post-page">
    <h1>{postInfo.title}</h1>
    { 
       loginStatus && (
        <>
       
<Link to={`/edit/${postInfo._id}`} class="button-40" role="button">Edit Post</Link>

<br />
        </>
       )
    }
    <time>{<ReactTimeAgo date={postInfo.createdAt} />}</time>
    <a href="" className="author"> by {postInfo.author} </a>
    <div className="image-post">
        <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
    </div>
   <div dangerouslySetInnerHTML={{__html:postInfo.content}}/>  
   </div>
   <Footer/>
   </>
  )
}

export default PostPage
