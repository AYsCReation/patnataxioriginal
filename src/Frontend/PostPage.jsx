import React from 'react'
import { useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import '../Frontend/Style/PostPage.css'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'
TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)
const PostPage = () => {
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

  return (
   <>
   <div className="post-page">
    <h1>{postInfo.title}</h1>
    <time>{<ReactTimeAgo date={postInfo.createdAt} />}</time>
    <a href="" className="author"> by {postInfo.author} </a>
    <div className="image-post">
        <img src={`http://localhost:4000/${postInfo.cover}`} alt="" />
    </div>
   <div dangerouslySetInnerHTML={{__html:postInfo.content}}/>  
   </div>
   </>
  )
}

export default PostPage
