import React from 'react';
import "./Blogs.css";
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blogs = (props) => {
    // console.log(props.blog);
    const { images, author, title, read_time, hash, publish_date } = props.blog;
    const { updateBookMarkHandler, bookmarkHandler, ToastContainer } = props;
    return (
        <section className='blog'>
            <img className='cover-img' src={images.cover} alt="" />

            <div className='author-info'>
                <div className='author'>
                    <img className='author-img' src={images.author} alt="" />
                    <div>
                        <h3 className='author-name'>{author}</h3>
                        <p className='publish-date'>{publish_date}</p>
                    </div>
                </div>
                <div>
                    <div className='read-time'>{read_time} min read
                        <span onClick={() => { bookmarkHandler(props.blog) }} className='bookmark-btn'> <FontAwesomeIcon icon={faBookmark} /></span>
                        <ToastContainer />
                    </div>
                </div>
            </div>

            <div style={{ textAlign: "start" }}>
                <h2 className='title'>{title}</h2>
                <p className='hash'><span>{hash[0]}</span> <span>{hash[1]}</span></p>
                <span onClick={() => updateBookMarkHandler(props.blog)} className='mark-as-read-btn'>Mark as read</span>
            </div>

            <hr />
        </section>
    );
};

export default Blogs;