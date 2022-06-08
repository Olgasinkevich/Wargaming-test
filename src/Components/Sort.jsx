import React, {useCallback} from 'react';

const Sort = ({onSelect, value}) => {
    const filterElem = useCallback((event)=> {
           onSelect(event.target.value)
    }, [onSelect])

    return (

        <select defaultValue={value} onChange={filterElem} className={'filter frame search-button'}>
            <option value={0}>Без фильтров</option>
            <option value={10}>Номер {'>'}10</option>
            <option value={50}>Номер {'>'}50</option>
            <option value={100}>Номер {'>'}100</option>
        </select>

    );
};

export default Sort;
