import React, {useCallback} from 'react';
import Elements from "./Elements";


const SearchForm = ({searchQuery, setSearchQuery}) => {
    const onChange = useCallback(event => setSearchQuery(event.target.value), [setSearchQuery]);

    return (
        <form className="form">
            <input type="search" className="search frame" value={searchQuery}
                   onChange={onChange} placeholder='Search' autoComplete="off"/>
        </form>

    );
};

export default SearchForm;




