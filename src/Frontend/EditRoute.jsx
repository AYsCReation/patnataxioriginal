import React, { useEffect, useState } from 'react';
import "../Frontend/Style/Blog.css";
import "../Frontend/Style/Create.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate, useParams } from 'react-router';
import AdminDashboard from './AdminDashboard';
import Navbar from './Navbar';

const EditRoute = ({loginStatus}) => {
        const [title, setTitle] = useState('');
    const [FromRoute, setFormRoute] = useState('');
    const [content, setContent] = useState('');
    const [toRoute, setToRoute] = useState(''); // Change 'files' to 'file
    // const [author, setAuthor] = useState('');

    // const [customUrl , setCustomUrl] = useState('');

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
    const [id, setid] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {customUrl} = useParams();
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
    useEffect(()=>{
        fetch('https://backend-taxi.onrender.com/routes/'+customUrl).then(response=>{
            response.json().then(postInfo=>{
                setTitle(postInfo.title);
                setFormRoute(postInfo.FromRoute);
                setContent(postInfo.content);
                setToRoute(postInfo.toRoute);
                setFaq1Ques(postInfo.faq1.que);
                setFaq1Ans(postInfo.faq1.ans);
                setFaq2Ques(postInfo.faq2.que);
                setFaq2Ans(postInfo.faq2.ans);
                setFaq3Ques(postInfo.faq3.que);
                setFaq3Ans(postInfo.faq3.ans);
                setFaq4Ques(postInfo.faq4.que);
                setFaq4Ans(postInfo.faq4.ans);
                setFaq5Ques(postInfo.faq5.que);
                setFaq5Ans(postInfo.faq5.ans);
                setid(postInfo._id);
            })
        })
      },[]);
    if(redirect){
        return <Navigate to={'/routes/'+customUrl}/>
    }
    

    const updatePost = async (e) => {
        e.preventDefault();
        
        const cityData = {
          title,
          FromRoute,
          content,
          toRoute,
          faq1Ques,
          faq1Ans,
          faq2Ques,
          faq2Ans,
          faq3Ques,
          faq3Ans,
          faq4Ques,
          faq4Ans,
          faq5Ques,
          faq5Ans,
          id,
        };
      
        try {
          const response = await fetch(`https://backend-taxi.onrender.com/routes/${customUrl}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(cityData),
          });
      
          if (response.ok) {
            setRedirect(true);
          } else {
            console.error('Failed to update city data.');
          }
        } catch (error) {
          console.error('Error updating city data:', error);
        }
      };
  return (
    <>
    <Navbar loginStatus={loginStatus}/>
    <div className='createContainer'>
      <form className='createForm' onSubmit={updatePost}>
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
          placeholder={'Enter the custom Url'}
          className='createSummary'
          value={customUrl}
          onChange={(e) => setCustomUrl(e.target.value)}
        /> */}

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

export default EditRoute