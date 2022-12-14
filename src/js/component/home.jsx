import React, { Component } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Announcement from './Announcement.jsx'
import RessetButton from './RessetButton.jsx'
import Tile from './Tile.jsx'

//create your first component
class App extends Component {
    constructor (){
        super();
        this.state ={
            gameBoard: [
                ' ', ' ', ' ',
                ' ', ' ', ' ',
                ' ', ' ', ' '
            ],
			turn:'x'
        }
    }
	updateBoard(loc, player){

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
					return(
					<Tile 
					key={i}
					Loc={i}
					value={value}
					updateBoard={this.updateBoard.bind(this)}
					turn={this.state.turn}/>
					)
                    }.bind(this))}	 
            </div>
        );
    }
}

export default Home;
