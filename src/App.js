import React, { Component } from 'react';
import classes from './App.css';

import PlaylistCounter from './components/PlaylistCounter/PlaylistCounter'
import HoursCounter from './components/HoursCounter/HoursCounter'
import Filter from './components/Filter/Filter'
import Playlist from './components/Playlist/Playlist'

let fakeServerData = {
  user: {
    name: 'Martin',
    playlists: [
      {
        name: 'My Favorites',
        songs: ['Sin Pijama', 'Sirenas', 'Rewrite the stars']
      },
      {
        name: 'Rock Nacional',
        songs: ['Tan Distintos', 'Señales', 'Creo']
      },
      {
        name: 'Reggae',
        songs: ['Tu sin mi', 'Nada', 'Hoja en blanco']
      },
      {
        name: 'Baile',
        songs: ['Clandestino', 'No es justo', 'Unica']
      }
    ]
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {serverData: {}}
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({serverData: fakeServerData})
    }, 1000) 
  }

  render() {
    return (
      <div className={classes.App}>
        {this.state.serverData.user ?
        <div>
          <h1 className={classes.TituloApp}>
            {this.state.serverData.user.name}'s Playlists
          </h1>
          <PlaylistCounter 
            playlists={this.state.serverData.user.playlists}/>
          <HoursCounter />
          <Filter />
          <Playlist />
          <Playlist />
          <Playlist />
          <Playlist />
        </div> : <h1 className={classes.Loading}>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
