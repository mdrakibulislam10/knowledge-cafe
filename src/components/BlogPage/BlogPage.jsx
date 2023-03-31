import React, { useState } from 'react';
import { useEffect } from 'react';
import "./BlogPage.css";
import Blogs from '../Blogs/Blogs';
import Bookmarks from '../Bookmarks/Bookmarks';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);

    // const [blog, setBlog] = useState([]);

    // count bookmark num
    const [countBM, setCountBM] = useState(0);

    // count read time
    const [readTime, setReadTime] = useState(0);

    // one by one title
    const [selectedBlogs, setSelectedBlogs] = useState([]);

    // load blogs
    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    // mark as read handler
    const updateBookMarkHandler = (blog) => {
        // setBlog(blog);
        setCountBM(countBM + 1);
        setReadTime(readTime + parseInt(blog.read_time));

    };

    const bookmarkHandler = (blog) => {
        setSelectedBlogs([...selectedBlogs, blog])

    }
    // console.log(selectedBlogs);

    return (
        <section className='blog-container'>
            <div className='blogs'>
                {
                    blogs.map(blog => <Blogs
                        blog={blog}
                        updateBookMarkHandler={updateBookMarkHandler}
                        bookmarkHandler={bookmarkHandler}
                        key={blog.id}
                    ></Blogs>)
                }
            </div>

            <div className='bookmarks'>
                <div>
                    {
                        <Bookmarks
                            selectedBlogs={selectedBlogs}
                            countBM={countBM}
                            readTime={readTime}
                        ></Bookmarks>
                    }
                    {/* {
                        selectedBlogs.map(blog => <Bookmarks blog={blog} key={blog.id}></Bookmarks>)
                    } */}
                </div>
            </div>
        </section>
    );
};

export default BlogPage;