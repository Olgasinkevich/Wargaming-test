import React from 'react';
import '../styles/testStyle.css';

const Element = ({text}) => {
    return (
        <label>
            <input type={'checkbox'}/>
            {text}
        </label>
    );
};

export default Element;