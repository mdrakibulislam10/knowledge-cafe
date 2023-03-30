import React, { useState } from 'react';
import { useEffect } from 'react';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("fakeData.json")
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);


    return (
        <div>

        </div>
    );
};

export default BlogPage;