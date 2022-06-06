import React, {useState} from 'react';
import Elements from "./Elements";


const SearchForm = ({searchQuery, setSearchQuery}) => {

    return (
        <form className="form">
            <input type="search" className="search frame" value={searchQuery}
                   onChange={event => setSearchQuery(event.target.value)} placeholder='Search' autoComplete="off"/>
        </form>

    );
};

export default SearchForm;




