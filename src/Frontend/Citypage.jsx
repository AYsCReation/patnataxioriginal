import React from 'react'
import { useParams, Link } from 'react-router-dom';
import {useState, useEffect, useRef } from 'react';
import '../Frontend/Style/PostPage.css'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'
import Navbar from "../Frontend/Navbar"
import Footer from "../Frontend/Footer"
TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)
const Citypage = ({loginStatus}) => {
    
    const [cityInfo, setCityInfo] = useState(null);
    const {customUrl} = useParams();
    
    useEffect(() => {
        fetch(`http://localhost:4000/city/${customUrl}`)
            .then(response => response.json())
            .then(data => {
                setCityInfo(data);
            })
            .catch(error => {
                // Handle error if necessary
            });
    }, [customUrl]);

    if (!cityInfo) return '';
console.log(loginStatus);

const FaqItem = ({ title, content }) => {
    const [expanded, setExpanded] = useState(false);
    const [contentHeight, setContentHeight] = useState(0);
  
    const toggleAccordion = () => {
      setExpanded(!expanded);
    };
  
    useEffect(() => {
      if (expanded) {
        // After the component has expanded, calculate the content height
        setContentHeight(ref.current.scrollHeight);
      } else {
        setContentHeight(0); // Reset the content height when collapsed
      }
    }, [expanded]);
  
    const ref = useRef(null);
  
    return (
      <div className="accordion-item">
        <button
          className={`accordion-button ${expanded ? 'expanded' : ''}`}
          onClick={toggleAccordion}
          aria-expanded={expanded}
        >
          <span className="accordion-title">{title}</span>
          <span className="icon" aria-hidden="true"></span>
        </button>
        <div
          className="accordion-content"
          style={{ maxHeight: `${expanded ? contentHeight : 0}px` }}
          ref={ref}
        >
          <p>{content}</p>
        </div>
      </div>
    );
  };
  
  return (
   <>
   <Navbar/>
   <div className="post-page">
    <h1>{cityInfo.title}</h1>
    { 
       loginStatus && (
        <>
       
<Link to={`/edit/${cityInfo._id}`} class="button-40" role="button">Edit Post</Link>

<br />
        </>
       )
    }
    
   
  
   <div dangerouslySetInnerHTML={{__html:cityInfo.content}}/>  
   </div>

 <div className="container-faq">
      <h2>Frequently Asked Questions</h2>
      <div className="accordion">
        <FaqItem
          title={cityInfo.faq1.que}
          content={cityInfo.faq1.ans}
        />
        <FaqItem
          title={cityInfo.faq2.que}
          content={cityInfo.faq2.ans}
        />
        <FaqItem
           title={cityInfo.faq3.que}
           content={cityInfo.faq3.ans}
        />
        <FaqItem
        title={cityInfo.faq4.que}
        content={cityInfo.faq4.ans}
        />
        <FaqItem
         title={cityInfo.faq5.que}
         content={cityInfo.faq5.ans}
        />
      </div>
    </div>
   
   <Footer/>
   </>
  )
}

export default Citypage