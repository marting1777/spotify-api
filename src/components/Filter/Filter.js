import React, {Component} from 'react'
import classes from './Filter.css'

class Filter extends Component {
    render () {
        return (
            <div className={classes.Filter}>
                <img/>
                <input type="text" onKeyUp={event => this.props.onTextChange(event.target.value)}/>
            </div>
        )
    }
}

export default Filter