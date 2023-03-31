import React, { useState } from 'react';
import { useEffect } from 'react';
import "./BlogPage.css";
import Blogs from '../Blogs/Blogs';
import Bookmarks from '../Bookmarks/Bookmarks';
// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);

    // count bookmark num
    const [countBM, setCountBM] = useState(0);

    // count read time
    const [readTime, setReadTime] = useState(0);

    // selected blog for title
    const [selectedBlogs, setSelectedBlogs] = useState([]);

    // load blogs
    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    // mark as read handler
    const updateBookMarkHandler = (blog) => {
        setReadTime(readTime + parseInt(blog.read_time));
    };

    const bookmarkHandler = (blog) => {

        if (selectedBlogs.find(b => b.id === blog.id)) {
            toast("You Have Already Bookmarked This Blog!");
        }
        else {
            setSelectedBlogs([...selectedBlogs, blog])
            setCountBM(countBM + 1);
        }
    }

    return (
        <section className='blog-container'>
            <div className='blogs'>
                {
                    blogs.map(blog => <Blogs
                        blog={blog}
                        updateBookMarkHandler={updateBookMarkHandler}
                        bookmarkHandler={bookmarkHandler}
                        ToastContainer={ToastContainer}
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
                </div>
            </div>
        </section>
    );
};

export default BlogPage;