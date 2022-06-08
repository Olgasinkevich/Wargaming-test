import React, {useMemo, useState} from 'react';
import SearchForm from "./SearchForm";

import Elements from "./Elements";

import Modal from "./Modal/Modal";

import Element from "./Element";
import GroupSelectedElement from "./GroupSelectedElement";
import Sort from "./Sort";

const DEFAULT_MIN_NUMBER = 0;
const ElementsSelection = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [minNumber, setMinNumber] = useState(DEFAULT_MIN_NUMBER);
    /*
        let choiceArray = [];
        let counter = 0;
        */

    const selected = (text) => {
        console.log(text);
        /*
                if(counter===3) {
                    console.log(choiceArray);
                    return <Modal visible={modal} onPress={ onModalPress}>
                        <h1 className={'textTitle'}>No free slots!</h1>
                    </Modal>
            } if (choiceArray.includes(text)) {
                    choiceArray.pop();
                    counter-=1;
                    console.log(choiceArray);
            }

         */
        /*
        const choiceArray = choiceArray.push(text);
        counter+=1;
        console.log(choiceArray, counter);*/
    }

    return (
        <div className={'elements-wrapper'}>
            <GroupSelectedElement/>

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
    );
};

export default ElementsSelection;