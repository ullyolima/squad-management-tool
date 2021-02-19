import React, { useEffect, useState } from 'react'
import './style.css'
import classNames from "classnames"

function Player({ playerName, playerAge, playerNacionality, setSelectedPlayers, id, selected }) {

    const [playerSelected, setPlayerSelected] = useState(selected)

    const playerClass = classNames({
        player: true,
        selected: playerSelected
    })


    useEffect(() => {
        setSelectedPlayers(prevState => {
            const existPlayer = prevState.find(playerId => playerId === id)  
            if (playerSelected && !existPlayer) {
                return [...prevState, id]
            } else if (!playerSelected && existPlayer) {
                return prevState.filter(player => (player !== id))
            } else {
                return []
            }
        })
    }, [playerSelected, id])

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
