import React, {useState} from 'react';

const SearchForm = () => {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <form className="form">
            <input type="search" className="search frame" value={searchQuery} placeholder='Search' autoComplete="off" />
            <button className="search-button frame">НАЙТИ</button>
        </form>

    );
};

export default SearchForm;

/*
const sortAndSearchCards = useMemo(()=>{
    return sortedCards.filter(items => items.name.toLowerCase().includes(searchQuery.toLowerCase()))
}, [searchQuery, sortedCards])
return sortAndSearchCards;

 */