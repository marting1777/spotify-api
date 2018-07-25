import React, {Component} from 'react'
import classes from './Playlist.css'

class Playlist extends Component {
    render () {
        return (
            <div className={classes.Playlist}>
                <img />
                <h3>Playlist Name</h3>
                <ul>
                    <li>Song 1</li>
                    <li>Song 2</li>
                    <li>Song 3</li>
                </ul>
            </div>
        )
    }
}

export default Playlist