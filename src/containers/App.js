import React, { Component } from 'react';
import SearchField from '../components/SearchField';
import CardList from '../components/CardList';
import 'tachyons';
import './App.css';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry'

class App extends Component {
    constructor () {
        super();
        this.state = {
            SearchFieldText : '',
            robotsOnScreen : []
        }
    }

    SearchInputChange = (event) => {
        this.setState({SearchFieldText : event.target.value});
    }

    render () {
        const { SearchFieldText, robotsOnScreen } = this.state;
        
        const filteredRobots = robotsOnScreen.filter(bot => {
            let searchText = SearchFieldText.toLowerCase();

            return bot.name.toLowerCase().includes(searchText) || 
            bot.email.toLowerCase().includes(searchText);
        });

        return !robotsOnScreen.length ?
        <h2>loading...</h2> :
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchField searchChange={this.SearchInputChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList users={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
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