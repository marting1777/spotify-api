import React, {Component} from 'react'
import classes from './Playlist.css'

class Playlist extends Component {
    render () {

        let playlist = this.props.playlist

        return (
            <div className={classes.Playlist}>
                <img />
                <h3>{playlist.name}</h3>
                <ul>
                    {playlist.songs.map(songs => 
                        <li className={classes.Songs}>{songs.name}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Playlist