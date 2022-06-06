import React from 'react';
import classes from './Modal.module.css';


const Modal = ({children, visible, onPress}) => {
    console.log('modal');
    const rootClasses=[classes.modalWindow]
    if(visible) {
        rootClasses.push(classes.active)
    }
    return (
        <div className={rootClasses.join(' ')} onClick={onPress} >
            <div className={classes.modalContent} onClick={event=>event.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;