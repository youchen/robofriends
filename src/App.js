import React, { Component } from 'react';
import SearchField from './SearchField';
import CardList from './CardList';
import 'tachyons';
import './App.css'

class App extends Component {
    constructor () {
        super();
        this.state = {
            SearchField : '',
            robotsOnScreen : []
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

    componentDidMount () {
        /* 
            WARN: response blcoked by CORS policy, used 
            https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en
            as workaround
        */
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robotsOnScreen: users}))
    }
}

export default App;