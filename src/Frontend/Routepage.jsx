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
const Routepage = ({loginStatus}) => {
    
    const [routeInfo, setrouteInfo] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/routes/${id}`)
            .then(response => response.json())
            .then(data => {
                setrouteInfo(data);
            })
            .catch(error => {
                // Handle error if necessary
            });
    }, [id]);

    if (!routeInfo) return '';
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
    <h1>{routeInfo.title}</h1>
    { 
       loginStatus && (
        <>
       
<Link to={`/edit/${routeInfo._id}`} class="button-40" role="button">Edit Post</Link>

<br />
        </>
       )
    }
    
   
  
   <div dangerouslySetInnerHTML={{__html:routeInfo.content}}/>  
   </div>

 <div className="container-faq">
      <h2>Frequently Asked Questions</h2>
      <div className="accordion">
        <FaqItem
          title={routeInfo.faq1.que}
          content={routeInfo.faq1.ans}
        />
        <FaqItem
          title={routeInfo.faq2.que}
          content={routeInfo.faq2.ans}
        />
        <FaqItem
           title={routeInfo.faq3.que}
           content={routeInfo.faq3.ans}
        />
        <FaqItem
        title={routeInfo.faq4.que}
        content={routeInfo.faq4.ans}
        />
        <FaqItem
         title={routeInfo.faq5.que}
         content={routeInfo.faq5.ans}
        />
      </div>
    </div>
   
   <Footer/>
   </>
  )
}

export default Routepage
