import React, { useEffect, useState } from 'react';
import "../Frontend/Style/Blog.css";
import "../Frontend/Style/Create.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Navigate, useParams } from 'react-router';

const EditCity = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [footTitle, setfootTitle] = useState('');
   

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
        fetch('http://localhost:4000/city/'+customUrl).then(response=>{
            response.json().then(postInfo=>{
                setTitle(postInfo.title);
                setContent(postInfo.content);
                setSummary(postInfo.summary);
                setfootTitle(postInfo.footTitle);
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
        return <Navigate to={'/city/'+customUrl}/>
    }
    

    const updatePost = async (e) => {
        e.preventDefault();
        
        const cityData = {
          title,
          content,
          summary,
          footTitle,
          customUrl,
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
          const response = await fetch(`http://localhost:4000/city/${customUrl}`, {
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
                    placeholder={'Enter the Footer Title'}
                    className='createSummary'
                    value={footTitle}
                    onChange={(e) => setfootTitle(e.target.value)}
                />
                <input
                    type="summary"
                    placeholder={'Summary'}
                    className='createSummary'
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
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
                <button className='createPostBtn'>Create City Page</button>
            </form>
        </div>
    </>
  )
}

export default EditCity