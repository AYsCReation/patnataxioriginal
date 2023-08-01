import React from 'react'
import "../Frontend/Style/Blog.css"
import { Link } from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)
const Blog = ({ _id ,title, summary, cover, content, createdAt, author, customUrl}) => {
    
    return (
        <>
            <div className="blogContainer">
                <div className="post">
                    <div className="Blog-image">
                        <Link to={`/post/${customUrl}`}>
                           
                        <img src={ 'http://localhost:4000/'+ cover} alt="" />
                        </Link>
                    </div>
                    <div className="texts">
                       <Link to={`/post/${customUrl}`}><h2>{title}</h2></Link> 
                        <p className="info">
                            <a href="" className="author">{author} </a>
                            <time>{<ReactTimeAgo date={createdAt} />}</time>
                        </p>
                        <p className='Summary'> {summary} </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blog;