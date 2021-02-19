import React from 'react'
import FieldPlayer from '../FieldPlayer/FieldPlayer'
import './style.css'

function Formations({ formationNumber, selectedPlayers }) {

    const formationNumbers = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "keeper"]

    if (selectedPlayers.length > 0) return (
        <div className="soccer-formation" data-formation={formationNumber}>
            {selectedPlayers.map((player, index) => (<FieldPlayer nameInitials={player.nameinitials} playerNumber={formationNumbers[index]} />))}
        </div>
    )

    return (
        <div className="soccer-formation" data-formation={formationNumber}>
            <FieldPlayer playerNumber="one" nameInitials="+" />
            <FieldPlayer playerNumber="two" nameInitials="+" />
            <FieldPlayer playerNumber="three" nameInitials="+" />
            <FieldPlayer playerNumber="four" nameInitials="+" />
            <FieldPlayer playerNumber="five" nameInitials="+" />
            <FieldPlayer playerNumber="six" nameInitials="+" />
            <FieldPlayer playerNumber="seven" nameInitials="+" />
            <FieldPlayer playerNumber="eight" nameInitials="+" />
            <FieldPlayer playerNumber="nine" nameInitials="+" />
            <FieldPlayer playerNumber="ten" nameInitials="+" />
            <FieldPlayer playerNumber="keeper" nameInitials="+" />
        </div>
    )
}

export default Formations
