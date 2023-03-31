import React from 'react';
import "./MarkTitle.css";

const MarkTitle = ({ title }) => {
    return (
        <div className='added-title'>
            <p>{title}</p>
        </div>
    );
};

export default MarkTitle;