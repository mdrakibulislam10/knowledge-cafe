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

            <div>
                <div>
                    <img src={images.author} alt="" />
                    <h3>{author}</h3>
                    <p>{publish_date}</p>
                </div>
                <div>
                    <p>{read_time} min read <FontAwesomeIcon icon={faBookmark} /></p>
                </div>
            </div>

        </section>
    );
};

export default Blogs;