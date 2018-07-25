import React, { Component } from 'react';
import classes from './App.css';

import Aggregate from './components/Agreggate/Aggregate'
import Filter from './components/Filter/Filter'
import Playlist from './components/Playlist/Playlist'

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <h1 className={classes.TituloApp}>Title</h1>
        <Aggregate />
        <Aggregate />
        <Filter />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    );
  }
}

export default App;
