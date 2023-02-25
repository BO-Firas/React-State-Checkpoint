import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    person: {
      fullName: "Mohamed Firas Ben Othmen",
      bio: "Student",
      imgSrc: "/me.jpg",
      profession: "Full Stack Developer"
    },
    shows: false,
    intervalId: null,
    mountedTime: null
  };

  toggleShows = () => {
    this.setState(prevState => ({ shows: !prevState.shows }));
  };

  componentDidMount() {
    const intervalId = setInterval(() => {
      this.setState({ mountedTime: new Date() });
    }, 1000);

    this.setState({ intervalId, mountedTime: new Date() });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { shows, mountedTime } = this.state;

    return (
      <div className="App">
        <div className="card">
          <h1>My Profile</h1>
          <button onClick={this.toggleShows}>Toggle Profile</button>
          {shows && (
            <div>
              <h2>{fullName}</h2>
              <img src={imgSrc} alt={fullName} />
              <p>{bio}</p>
              <p>Profession: {profession}</p>
            </div>
          )}
          <p>Component mounted {Math.floor((new Date() - mountedTime) / 1000)} seconds ago</p>
        </div>
      </div>
    );
  }
}

export default App;
