import React from 'react';
import "./MarkTitle.css";

const MarkTitle = ({ title }) => {
    return (
        <div className='title'>
            <p>{title}</p>
        </div>
    );
};

export default MarkTitle;