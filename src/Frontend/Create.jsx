import React, { useState } from 'react'
import "../Frontend/Style/Blog.css"
import "../Frontend/Style/Create.css"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };
  const  formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];
const Create = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');

    const createNewPost=(e)=>{
        const data = new FormData();
        data.set('title',title);
        data.set('summary',summary);
        data.set('content',content);
        data.set('file',files[0]);

        e.preventDefault();
        fetch('http://localhost:4000/post'),{
            method: 'POST',
            body: data,
        }
    }
 
  return (
    <div className='createContainer'>
    <form className='createForm'>
        <input 
        type="title" 
        placeholder={'Title'} 
        className='createTitle'
        value={title}
        onChange={e=> setTitle(e.target.value)} />

        <input type="summary" 
        placeholder={'Summary'} 
        className='createSummary'
        value={summary}
        onChange={e=> setSummary(e.target.value)} />
        
        <input type="file" className='inputFile'
        value={files} 
        onChange={e => setFiles(e.target.files)}/>
        
        <ReactQuill value={content} 
        modules={modules} formats={formats} 
        className='createTextarea'
        onChange={(newValue)=>setContent(newValue)} />
        
        <button className='createPostBtn'>Create Post</button>
    </form>
    </div>
  )
}

export default Create
