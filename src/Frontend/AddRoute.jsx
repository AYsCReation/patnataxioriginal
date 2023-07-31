import React, { useState } from 'react';
import "../Frontend/Style/Blog.css";
import "../Frontend/Style/Create.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from 'axios';

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],  // Add the 'table' option here to enable table creation
    ['clean'], ['table'],
   
    
  ],
  
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image','table',
];
const AddRoute = () => {
    const [title, setTitle] = useState('');
    const [FromRoute, setFormRoute] = useState('');
    const [content, setContent] = useState('');
    const [toRoute, setToRoute] = useState(''); // Change 'files' to 'file
    // const [author, setAuthor] = useState('');
    const createNewPost = async (e) => {
      e.preventDefault();
  
      try {
          const formData ={
          title,
          FromRoute,
          content,
          toRoute
          };
        //   formData.append('author', author);
    
          await axios.post('http://localhost:4000/api/routes', formData);
    
          // Optionally, you can handle success or navigate to a new page.
          alert('Route post created successfully');
          
          window.location.reload();
        } catch (error) {
          // Handle errors if the request fails.
          console.error('Error creating blog post:', error);
        }
  
  
    };
  return (
<>
<div className='createContainer'>
      <form className='createForm' onSubmit={createNewPost}>
        <input
          type="title"
          placeholder={'Title'}
          className='createTitle'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="summary"
          placeholder={'Input From Route'}
          className='createSummary'
          value={FromRoute}
          onChange={(e) => setFormRoute(e.target.value)}
        />

        <input
          type="summary"
          className='inputFile'
          placeholder={'Input To Route'}
          value={toRoute}
          onChange={(e) => setToRoute(e.target.value)} // Update 'files' to 'file'
        />
        {/* <input
          type="summary"
          placeholder={'Enter the name of Author'}
          className='createSummary'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        /> */}

        <ReactQuill
          value={content}
          modules={modules}
          formats={formats}
          className='createTextarea'
          onChange={(newValue) => setContent(newValue)}
        />

        <button className='createPostBtn'>Create Post</button>
      </form>
    </div>
</>
  )
}
export default AddRoute;