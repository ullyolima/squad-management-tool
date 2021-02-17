import React from 'react'
import Button from '../Button/Button'
import ConfigureSquad from '../ConfigureSquad/ConfigureSquad'
import TeamInformation from '../TeamInformation/TeamInformation'
import './style.css'

function CardBodyCreateTeam() {
    return (
        <div className="card-body card-body__create-team">
            <TeamInformation />
            <ConfigureSquad />
            <Button buttonName="Save"/>
        </div>
    )
}

export default CardBodyCreateTeam
