
import React, { useEffect, useState } from 'react';
import "../Frontend/Style/Blog.css";
import "../Frontend/Style/Create.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate, useParams } from 'react-router';
import ContentEditor from './ContentEditor';

const EditPostPage = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile] = useState(null); 
    const [author, setAuthor] = useState('');
    const [id, setid] = useState('');
    const [redirect, setRedirect] = useState(false);
    
    const {customUrl} = useParams();
    useEffect(()=>{
        fetch('http://localhost:4000/post/'+customUrl).then(response=>{
            response.json().then(postInfo=>{
                setTitle(postInfo.title);
                setContent(postInfo.content);
                setSummary(postInfo.summary);
                setAuthor(postInfo.author);
                setid(postInfo._id);
            })
        })
      },[]);
    if(redirect){
        return <Navigate to={'/post/'+customUrl}/>
    }
    

      const updatePost = async (e)=>  {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('summary', summary);
        formData.append('content', content);
        formData.append('customUrl', customUrl);
        formData.append('id', id);
        if(file?.[0]){
            formData.append('file', file?.[0]);
        }
        formData.append('author', author);

     const response =  await fetch ('http://localhost:4000/post' , {
            method: 'PUT',
            body: formData,
        });
        if(response.ok){

            setRedirect(true);
        } 
      }
     
  return (
   <>
   <div className='createContainer'>
      <form className='createForm' onSubmit={updatePost} >
        <input
          type="title"
          placeholder={'Title'}
          className='createTitle'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="summary"
          placeholder={'Summary'}
          className='createSummary'
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />

        <input
          type="file"
          className='inputFile'
          onChange={(e) => setFile(e.target.files[0])} // Update 'files' to 'file'
        />
        <input
          type="summary"
          placeholder={'Enter the name of Author'}
          className='createSummary'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

       <ContentEditor onChange={setContent} value={content}  />
        <button className='createPostBtn' >Update Post</button>
      </form>
    </div>
   </>
  )
}

export default EditPostPage
