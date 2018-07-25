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
        songs: [
          {name: 'Sin Pijama', duration: 1234},
          {name: 'Sirenas', duration: 7865},
          {name: 'Rewrite the stars', duration: 3456}
        ]
      },
      {
        name: 'Rock Nacional',
        songs: [
          {name: 'Tan Distintos', duration: 3645}, 
          {name: 'Señales', duration: 945},
          {name: 'Creo', duration: 7623}
        ]
      },
      {
        name: 'Reggae',
        songs: [
          {name: 'Tu sin mi', duration: 2312},
          {name: 'Nada', duration: 8563},
          {name: 'Hoja en blanco', duration: 5876}
        ]
      },
      {
        name: 'Baile',
        songs: [
          {name: 'Clandestino', duration: 543},
          {name: 'No es justo', duration: 9832},
          {name: 'Unica', duration: 6754}
        ]
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
          <HoursCounter 
            playlists={this.state.serverData.user.playlists}/>
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
