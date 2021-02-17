import React from 'react'
import './style.css'
import sortIcon from "../../assets/img/sort-icon.png"
import CardTeamsRow from '../CardTeamsRow/CardTeamsRow'

function CardBodyTeams() {
    return (
        <div className="card-body__teams">
            <div className="sort-buttons d-flex">
                <div className="sort-name">
                    <span>Name</span>
                    <img src={sortIcon} alt="Sort icon"/>
                </div>
                <div className="sort-description">
                    <span>Description</span>
                    <img src={sortIcon} alt="Sort icon"/>
                </div>
            </div>
            <div className="card-body-teams-row">
                <CardTeamsRow teamName="Barcelona" teamDescription="Barcelona Squad"/>
                <CardTeamsRow teamName="Real Madrid" teamDescription="Real Madrid Squad"/>
                <CardTeamsRow teamName="Milan" teamDescription="Milan Squad"/>
            </div>            
        </div>
    )
}

export default CardBodyTeams
