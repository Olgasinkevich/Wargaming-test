import React, {useMemo, useState} from 'react';
import SearchForm from "./SearchForm";
import SearchSort from "./SearchSort";

import Modal from "./Modal/Modal";

import Element from "./Element";
import Elements from "./Elements";



const ElementsSelection = () => {
    const [searchQuery, setSearchQuery] = useState('');
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
            <h3 className={'title-three'}>Выбор элементов</h3>
            <h4>На данный момент выбрано:</h4>
            <>
                <div className='choice frame'></div>
                <div className='choice frame'></div>
                <div className='choice frame'></div>
            </>
            <button className={'search-button frame'}>Изменить выбор</button>

            <div className={'navigation-wrapper'}>
                {!searchQuery ?
                                <SearchForm searchQuery ={searchQuery} setSearchQuery={setSearchQuery}/> :
                    <SearchSort searchQuery={searchQuery} elemList={elemList}/> }
                <select defaultValue={'0'} className={'filter frame search-button'} >
                    <option value={'0'}>Без фильтров</option>
                    <option value={'10'}>Номер >10</option>
                    <option value={'100'}>Номер >100</option>
                    <option value={'200'}>Номер >200</option>
                </select>

            </div>


            <Elements selectedv={selected}/>


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