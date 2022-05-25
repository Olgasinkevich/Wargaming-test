import React, {useState} from 'react';
import Elements from "./Elements";

const SearchForm = () => {
    const [searchQuery, setSearchQuery] = useState('');
    return (
        <form className="form">
            <input type="search" className="search frame" value={searchQuery}
                   onChange={event => setSearchQuery(event.target.value)} placeholder='Search' autoComplete="off"/>
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