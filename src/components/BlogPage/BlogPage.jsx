import React, { useState } from 'react';
import { useEffect } from 'react';
import "./BlogPage.css";
import Blogs from '../Blogs/Blogs';
import Bookmarks from '../Bookmarks/Bookmarks';
// toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogPage = () => {
    // load blogs
    const [blogs, setBlogs] = useState([]);

    // count bookmark num
    const [countBM, setCountBM] = useState(0);

    // count read time
    const [readTime, setReadTime] = useState(0);

    // selected blog for bookmark
    const [selectedBlogs, setSelectedBlogs] = useState([]);

    // load blogs
    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, []);

    // mark as read handler
    const markAsReadHandler = (blog) => {
        const currentTime = readTime + parseInt(blog.read_time);
        setReadTime(currentTime);

        localStorage.setItem("time", currentTime);
    };

    // bookmark handler
    const bookmarkHandler = (blog) => {
        if (selectedBlogs.find(b => b.id === blog.id)) {
            toast("You Have Already Bookmarked This Blog! Please try to add another blog!");
        }
        else {
            const currentSelectedBlogs = [...selectedBlogs, blog];
            setSelectedBlogs(currentSelectedBlogs);

            const currentCount = countBM + 1;
            setCountBM(currentCount);

            // set data to local storage
            localStorage.setItem("blog", JSON.stringify(currentSelectedBlogs));
            localStorage.setItem("count", currentCount);
        }
    };

    // get data from local storage
    useEffect(() => {
        const storedBlog = JSON.parse(localStorage.getItem("blog"));
        if (storedBlog) {
            setSelectedBlogs(storedBlog);
        }

        const storedCount = localStorage.getItem("count");
        if (storedCount) {
            setCountBM(parseInt(storedCount));
        }

        const storedTime = localStorage.getItem("time");
        if (storedTime) {
            setReadTime(parseInt(storedTime));
        }
    }, []);

    return (
        <section className='blog-container'>
            <div className='blogs'>
                {
                    blogs.map(blog => <Blogs
                        blog={blog}
                        markAsReadHandler={markAsReadHandler}
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