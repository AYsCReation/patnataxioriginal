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

    const [customUrl , setCustomUrl] = useState('');

    const [faq1Ques, setFaq1Ques] = useState('');
    const [faq1Ans, setFaq1Ans] = useState('');

    const [faq2Ques, setFaq2Ques] = useState('');
    const [faq2Ans, setFaq2Ans] = useState('');

    const [faq3Ques, setFaq3Ques] = useState('');
    const [faq3Ans, setFaq3Ans] = useState('');

    const [faq4Ques, setFaq4Ques] = useState('');
    const [faq4Ans, setFaq4Ans] = useState('');

    const [faq5Ques, setFaq5Ques] = useState('');
    const [faq5Ans, setFaq5Ans] = useState('');
    const reset = () =>{
        setTitle('');
        setFormRoute('');
        setContent('');
        setToRoute('');
        setCustomUrl('');
        setFaq1Ques('');
        setFaq1Ans('');
        setFaq2Ques('');
        setFaq2Ans('');
        setFaq3Ques('');
        setFaq3Ans('');
        setFaq4Ques('');
        setFaq4Ans('');
        setFaq5Ques('');
        setFaq5Ans('');
    
       }
    const createNewPost = async (e) => {
      e.preventDefault();
  
      try {
          const formData ={
          title,
          FromRoute,
          content,
          toRoute,
          customUrl,
          faq1: { que: faq1Ques, ans: faq1Ans },
          faq2: { que: faq2Ques, ans: faq2Ans },
          faq3: { que: faq3Ques, ans: faq3Ans },
          faq4: { que: faq4Ques, ans: faq4Ans },
          faq5: { que: faq5Ques, ans: faq5Ans },
          };
        //   formData.append('author', author);
    
          await axios.post('http://localhost:4000/api/routes', formData, {
            headers: { 'Content-Type': 'application/json' },
        });
    
          // Optionally, you can handle success or navigate to a new page.
          alert('Route post created successfully');
          
          reset();
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
        <input
          type="summary"
          placeholder={'Enter the custom Url'}
          className='createSummary'
          value={customUrl}
          onChange={(e) => setCustomUrl(e.target.value)}
        />

        <ReactQuill
          value={content}
          modules={modules}
          formats={formats}
          className='createTextarea'
          onChange={(newValue) => setContent(newValue)}
        />
          <h1>FAQs</h1>
                <input
                    type="summary"
                    className='createSummary'
                    placeholder="FAQ1 Question"
                    value={faq1Ques}
                    onChange={(e) => setFaq1Ques(e.target.value)}
                />
                <input
                    type="summary"
                    className='createSummary'
                    placeholder="FAQ1 Answer"
                    value={faq1Ans}
                    onChange={(e) => setFaq1Ans(e.target.value)}
                />


                <input
                    type="summary"
                    className='createSummary'
                    placeholder="FAQ2 Question"
                    value={faq2Ques}
                    onChange={(e) => setFaq2Ques(e.target.value)}
                />
                <input
                    type="summary"
                    className='createSummary'
                    placeholder="FAQ2 Answer"
                    value={faq2Ans}
                    onChange={(e) => setFaq2Ans(e.target.value)}
                />

                <input
                    type="summary"
                    className='createSummary'
                    placeholder="FAQ3 Question"
                    value={faq3Ques}
                    onChange={(e) => setFaq3Ques(e.target.value)}
                />
                <input
                    type="summary"
                    className='createSummary'
                    placeholder="FAQ3 Answer"
                    value={faq3Ans}
                    onChange={(e) => setFaq3Ans(e.target.value)}
                />

                <input
                    type="summary"
                    className='createSummary'
                    placeholder="FAQ4 Question"
                    value={faq4Ques}
                    onChange={(e) => setFaq4Ques(e.target.value)}
                />
                <input
                    type="summary"
                    className='createSummary'
                    placeholder="FAQ4 Answer"
                    value={faq4Ans}
                    onChange={(e) => setFaq4Ans(e.target.value)}
                />

                <input
                    type="summary"
                    className='createSummary'
                    placeholder="FAQ5 Question"
                    value={faq5Ques}
                    onChange={(e) => setFaq5Ques(e.target.value)}
                />
                <input
                    type="summary"
                    className='createSummary'
                    placeholder="FAQ5 Answer"
                    value={faq5Ans}
                    onChange={(e) => setFaq5Ans(e.target.value)}
                />
        <button className='createPostBtn'>Create Post</button>
      </form>
    </div>
</>
  )
}
export default AddRoute;