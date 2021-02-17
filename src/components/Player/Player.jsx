import React from 'react'
import './style.css'

function Player({ playerName, playerAge, playerNacionality }) {
    return (
        <div className="player">
            <div>
                <span className="input-title">Name:</span>
                <span className="player-name player-data">{playerName}</span>
            </div>
            <div>
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
