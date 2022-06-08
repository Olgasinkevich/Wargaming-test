import React from 'react';

const GroupSelectedElement = () => {
    return (
        <>
            <h3 className={'title-three'}>Выбор элементов</h3>
            <h4>На данный момент выбрано:</h4>
            <>
                <div className='choice frame'></div>
                <div className='choice frame'></div>
                <div className='choice frame'></div>
            </>
            <button className={'search-button frame'}>Изменить выбор</button>
        </>
    );
};

export default GroupSelectedElement;