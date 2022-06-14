import React from 'react';

const ChoiceFrame = (props) => {
    return (

        <div onChange={() => props.onSelect(props.text)} className='choice frame'>
            {props.text}
        </div>
    );
};

export default ChoiceFrame;