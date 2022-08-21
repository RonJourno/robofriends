import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/Searchbox"
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from "../components/ErrorBoundry";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        const fetchedRobots = []
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => this.setState({ robots: json }));



    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const { robots, searchField } = this.state;
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(searchField.toLowerCase()))
        if (!robots.length) {
            return <h1>Loading</h1>
        }
        else {
            return (
                <div className="tc" >
                    <h1 className="f1">RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robotsArray={filteredRobots} />
                        </ErrorBoundry>
                    </Scroll>
                </div>

            );
        }

    }
}
export default App;