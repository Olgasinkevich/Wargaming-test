import React, {useCallback} from 'react';
import Modal from "./Modal/Modal";


const SearchForm = ({searchQuery, setSearchQuery}) => {
    console.log("searchQuery");
    const onChange = useCallback(event => setSearchQuery(event.target.value), [setSearchQuery]);

    return (
        <form className="form">
            <input type="search" className="search frame" value={searchQuery}
                   onChange={onChange} placeholder='Search' autoComplete="off"/>
        </form>

    );
};

export default SearchForm;




