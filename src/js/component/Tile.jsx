import React, {Component} from 'react';
import './Tile.css';

export default class Announcement extends Component {
    tileClick(props){
        props.updateBoard(props.loc, props.turn);
    }

    render () {
        retunr (
            <div className={"tile " + this.props.loc} onClick={() => this.tileClick(this.props)}>
                <p>{this.props.value}</p>
            </div>
        )
        }
}