import React from 'react';
import SearchField from './SearchField';
import CardList from './CardList';
import { robots } from './robots';
import 'tachyons';

const App = () => {
    return (
        <div className='tc'>
            <h1>RoboFriends</h1>
            <SearchField />
            <CardList users={robots} />
        </div>
    );
}

export default App;