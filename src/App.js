import React, { Component } from 'react';
import SearchField from './SearchField';
import CardList from './CardList';
import { robots } from './robots';
import 'tachyons';
import './App.css'

class App extends Component {
    constructor () {
        super();
        this.state = {
            SearchField : '',
            robotsOnScreen : robots
        }
    }

    SearchInputChange = (event) => {
        this.setState({SearchField : event.target.value});
    }

    render () {
        const filteredRobots = this.state.robotsOnScreen.filter(bot => {
            let searchText = this.state.SearchField.toLowerCase();

            return bot.name.toLowerCase().includes(searchText) || 
            bot.email.toLowerCase().includes(searchText);
        });
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchField searchChange={this.SearchInputChange}/>
                <CardList users={filteredRobots} />
            </div>
        );
    }
}

export default App;