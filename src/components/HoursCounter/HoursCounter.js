import React, {Component} from 'react'
import classes from './HoursCounter.css'

class HoursCounter extends Component {
    render() {
        return (
            <div className={classes.Menu}>
                <h2 className={classes.Titulo}>{this.props.playlists && this.props.playlists.length} Text</h2>
            </div>
        )
    }
}

export default HoursCounter