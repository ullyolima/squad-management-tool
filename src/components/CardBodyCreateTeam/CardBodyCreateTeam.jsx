import React from 'react'
import ConfigureSquad from '../ConfigureSquad/ConfigureSquad'
import TeamInformation from '../TeamInformation/TeamInformation'
import './style.css'

function CardBodyCreateTeam() {
    return (
        <div className="card-body__create-team">
            <TeamInformation />
            <ConfigureSquad />
        </div>
    )
}

export default CardBodyCreateTeam
