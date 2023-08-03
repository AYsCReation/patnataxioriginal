import React, { useState } from 'react';
import "../Frontend/Style/Blog.css";
import "../Frontend/Style/Create.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from 'axios';

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
    ['link', 'image'],  // Add the 'table' option here to enable table creation
    ['clean'], ['table'],


  ],

};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image', 'table',
];

const Create = () => {
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [file, setFiles] = useState(null); // Change 'files' to 'file
  const [author, setAuthor] = useState('');
  const [customUrl, setcustomUrl] = useState('');
  const reset = () =>{
    setTitle('');
    setSummary('');
    setContent('');
    setFiles('');
    setAuthor('');
    setcustomUrl('');


   }
  const createNewPost = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('summary', summary);
      formData.append('content', content);
      formData.append('file', file);
      formData.append('author', author);
      formData.append('customUrl', customUrl);

      await axios.post('https://backend-taxi.onrender.com/api/posts', formData);

      // Optionally, you can handle success or navigate to a new page.
      alert('Blog post created successfully');
      reset();
    } catch (error) {
      // Handle errors if the request fails.
      console.error('Error creating blog post:', error);
    }


  };

  return (
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
          placeholder={'Summary'}
          className='createSummary'
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        />

        <input
          type="file"
          className='inputFile'
          onChange={(e) => setFiles(e.target.files[0])} // Update 'files' to 'file'
        />
        <input
          type="summary"
          placeholder={'Enter the name of Author'}
          className='createSummary'
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="summary"
          placeholder={'Enter the customzed URL'}
          className='createSummary'
          value={customUrl}
          onChange={(e) => setcustomUrl(e.target.value)}
        />
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
  );
};

export default Create;
