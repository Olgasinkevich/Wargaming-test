import React, {useState, useCallback} from 'react';
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

    const onSelect = useCallback((text) => {
        setNewArray(newArray.includes(text) ? newArray.filter(item => item !== text) : [...newArray, text]);

        }, [newArray]);

    const rootClasses = [classes.modalWindow]
    if (visible) {
        rootClasses.push(classes.active)
    }


    const save=useCallback(()=>{
        onPress();
    }, [onPress]);

    const cansel=useCallback(()=>{
        onPress();
        setNewArray([]);
    }, [onPress]);

    return (
        <div className={rootClasses.join(' ')}>
            <div className={classes.modalContent} onClick={event => event.stopPropagation()}>
                <div className={'navigation-wrapper'}>

                    <SearchForm searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

                    <Sort onSelect={setMinNumber} value={minNumber}/>

                </div>


                <Elements onSelect={onSelect} minNumber={minNumber} searchQuery={searchQuery}
                          disabled={!(newArray.length < 3)}/>
                <Choice newArray={newArray}/>
                <div className={'navigation-wrapper'}>
                    <button onClick={save} className={'search-button frame'}>Сохранить</button>
                    <button onClick={cansel} className={'search-button frame'}>Отмена</button>
                </div>

            </div>
        </div>
    );
};

export default Modal;