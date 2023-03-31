// import React, { useState } from 'react';
import "./Bookmarks.css";

const Bookmarks = (props) => {
    console.log(props.blog);
    const { read_time } = props.blog;
    return (
        <section>
            <div className='count-time'>
                <p>Spent time on read : {read_time} min</p>
            </div>

            <div className='added-bookmark'>
                <h2>Bookmarked Blogs : {props.countBM}</h2>
            </div>
        </section>
    );
};

export default Bookmarks;