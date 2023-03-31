import React from 'react';
import "./Blogs.css";
// font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'

const Blogs = (props) => {
    console.log(props.blog);
    const { images, author, title, read_time, hash, publish_date } = props.blog;
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
                    <p className='read-time'>{read_time} min read
                        <span> <FontAwesomeIcon icon={faBookmark} /></span>
                    </p>
                </div>
            </div>

            <div style={{ textAlign: "start" }}>
                <h2 className='title'>{title}</h2>
                <p className='hash'><span>{hash[0]}</span> <span>{hash[1]}</span></p>
                <a className='mark-as-read-btn' href="">Mark as read</a>
            </div>

            <hr />
        </section>
    );
};

export default Blogs;