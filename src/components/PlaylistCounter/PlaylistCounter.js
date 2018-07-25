import React, {Component} from 'react'
import classes from './PlaylistCounter.css'

class PlaylistCounter extends Component {
    render () {
        return (
            <div className={classes.Menu}>
                <h2 className={classes.Titulo}>{this.props.playlists && this.props.playlists.length} Text</h2>
            </div>
        )
    }
}

export default PlaylistCounter