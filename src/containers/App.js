import React, { Component } from 'react';
import Cardlist from '../Cardlist';
import SearchBox from '../SearchBox';
import Scroll from '../Scroll';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    try {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    } catch (error) {
      alert(error);
    }
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <Cardlist robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
