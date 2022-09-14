import React, {Component} from 'react'
import './App.css'

import Announcement from './Announcement'
import RessetButton from './RessetButton'
import Tile from './Tile'

class App extends Component {
    constructor (){
        super();
        this.state ={
            gameBoard: [
                ' ', ' ', ' ',
                ' ', ' ', ' ',
                ' ', ' ', ' '
            ]
        }
    }
    render (){
        return (
            <div className='container'>
                <div className='menu'>
                    <h1>Tic-Tac-Toe</h1>
                    <Announcement />
                    <RessetButton/>
                </div>
                {this.state.gameBoard.map(function(value, i){
                    <Tile />
                })}
            </div>
        );
    }
}

export default App;