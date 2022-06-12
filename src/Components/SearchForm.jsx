import React, {useCallback} from 'react';


const SearchForm = ({searchQuery, setSearchQuery}) => {

    const onChange = useCallback(event => setSearchQuery(event.target.value), [setSearchQuery]);

    return (
        <form className="form">
            <input type="search" className="search frame modal-search" value={searchQuery}
                   onChange={onChange} placeholder='Search' autoComplete="off"/>
        </form>

    );
};

export default SearchForm;




