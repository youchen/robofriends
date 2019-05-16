import React from 'react';

const SearchField = ({searchChange}) => {
    return (
        <div>
            <input
                className='pa3 ma3 ba b--green' // bg-lightest-blue'
                type='Search' 
                placeholder='Search Robots' 
                onChange={searchChange}
                />
        </div>
    );
}

export default SearchField;