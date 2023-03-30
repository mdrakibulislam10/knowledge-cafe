import React, { useState } from 'react';
import { useEffect } from 'react';
import "./BlogPage.css";
import Blogs from '../Blogs/Blogs';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);

    // load blogs
    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);


    return (
        <section className='blog-container'>
            <div className='blogs'>
                {
                    blogs.map(blog => <Blogs blog={blog}></Blogs>)
                }
            </div>

            <div className='bookmarks'>
                jjjj
            </div>
        </section>
    );
};

export default BlogPage;