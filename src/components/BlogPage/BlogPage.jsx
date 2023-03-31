import React, { useState } from 'react';
import { useEffect } from 'react';
import "./BlogPage.css";
import Blogs from '../Blogs/Blogs';
import Bookmarks from '../Bookmarks/Bookmarks';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);

    const [blog, setBlog] = useState({});

    // count bookmark num
    const [countBM, setCountBM] = useState(0);

    // count read time
    const [readTime, setReadTime] = useState(0);

    // load blogs
    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    // mark as read handler
    const updateBookMarkHandler = (blog) => {
        setBlog(blog);
        setCountBM(countBM + 1);
        setReadTime(readTime + parseInt(blog.read_time));
    };

    return (
        <section className='blog-container'>
            <div className='blogs'>
                {
                    blogs.map(blog => <Blogs
                        blog={blog}
                        updateBookMarkHandler={updateBookMarkHandler}
                        key={blog.id}
                    ></Blogs>)
                }
            </div>

            <div className='bookmarks'>
                <dir>
                    {
                        <Bookmarks
                            blog={blog}
                            countBM={countBM}
                            readTime={readTime}
                        ></Bookmarks>
                    }
                </dir>
            </div>
        </section>
    );
};

export default BlogPage;