import React from 'react';
import SearchForm from "./SearchForm";
import Elements from "./Elements";

const ElementsSelection = () => {
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
                <SearchForm/>
                <select className={'filter frame search-button'} >
                    <option selected>Без фильтров</option>
                    <option value={'10'}>Номер >10</option>
                    <option value={'100'}>Номер >100</option>
                    <option value={'200'}>Номер >200</option>
                </select>

            </div>

            <Elements/>

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