import React, {useState} from 'react';
import classes from './Modal.module.css';
import SearchForm from "../SearchForm";
import Sort from "../Sort";
import Elements from "../Elements";


const DEFAULT_MIN_NUMBER = 0;
const Modal = ({visible, onPress, className}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [minNumber, setMinNumber] = useState(DEFAULT_MIN_NUMBER);


    const selected = (text) => {
        console.log(text);
}


    console.log(visible);
    const rootClasses=[classes.modalWindow]
    if(visible) {
        rootClasses.push(classes.active)
    }
    return (
        <div className={rootClasses.join(' ')} onClick={onPress} >
            <div className={classes.modalContent} onClick={event=>event.stopPropagation()}>
                <div className={'navigation-wrapper'}>

                    <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

                    <Sort onSelect={setMinNumber} value={minNumber}/>

                </div>


                <Elements selected={selected} minNumber={minNumber} searchQuery={searchQuery}/>
                <h4>Выбранные элементы на данный момент:</h4>
                <>
                    <div className='choice frame'></div>
                    <div className='choice frame'></div>
                    <div className='choice frame'></div>
                </>
                <div className={'navigation-wrapper'}>
                    <button className={'search-button frame'}>Сохранить</button>
                    <button className={'search-button frame'}>Отмена</button>
                </div>

                           </div>
        </div>
    );
};

export default Modal;