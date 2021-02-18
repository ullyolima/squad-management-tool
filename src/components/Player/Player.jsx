import React, { useState } from 'react'
import './style.css'
import classNames from "classnames"

function Player({ playerName, playerAge, playerNacionality }) {

    const [playerSelected, setPlayerSelected] = useState(false)
    
    const playerClass = classNames({
        player: true,
        selected: playerSelected
    }) 

    return (
        <div className={playerClass} onClick={() => setPlayerSelected(prevState => !prevState)}>
            <div>
                <span className="input-title">Name:</span>
                <span className="player-name player-data">{playerName}</span>
            </div>
            <div className="player-age">
                <span className="input-title">Age:</span>
                <span className="player-age player-data">{playerAge}</span>
            </div>
            <div>
                <span className="input-title">Nacionality:</span>
                <span className="player-nacionality player-data">{playerNacionality}</span>
            </div>
        </div>
    )
}

export default Player
