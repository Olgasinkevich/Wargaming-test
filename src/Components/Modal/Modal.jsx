import React, {useState, useCallback, useRef} from 'react';
import classes from './Modal.module.css';
import SearchForm from "../SearchForm";
import Sort from "../Sort";
import Elements from "../Elements";
import Choice from "../Choice";


const DEFAULT_MIN_NUMBER = 0;
const Modal = ({visible, onPress}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [minNumber, setMinNumber] = useState(DEFAULT_MIN_NUMBER);
    const [newArray, setNewArray] = useState([]);
    const selected = useCallback((text) => {
        setNewArray([...newArray, text]);
    }, [newArray]);

    const rootClasses = [classes.modalWindow]
    if (visible) {
        rootClasses.push(classes.active)
    }
    return (
        <div className={rootClasses.join(' ')}>{console.log('@@@', newArray)}
            <div className={classes.modalContent} onClick={event => event.stopPropagation()}>
                <div className={'navigation-wrapper'}>

                    <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

                    <Sort onSelect={setMinNumber} value={minNumber}/>

                </div>


                <Elements selected={selected} minNumber={minNumber} searchQuery={searchQuery} disabled={!(newArray.length < 3)}/>
                <Choice/>
                <div className={'navigation-wrapper'}>
                    <button onClick={onPress} className={'search-button frame'}>Сохранить</button>
                    <button onClick={onPress} className={'search-button frame'}>Отмена</button>
                </div>

            </div>
        </div>
    );
};

export default Modal;