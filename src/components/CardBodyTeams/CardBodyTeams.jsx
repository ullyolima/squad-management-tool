import React, { useEffect, useState } from 'react'
import './style.css'
import sortIcon from "../../assets/img/sort-icon.png"
import CardTeamsRow from '../CardTeamsRow/CardTeamsRow'
import api from '../../service/api'

function CardBodyTeams() {
    
    const [teams, setTeams] = useState([])

    useEffect(() => {
        api.getTeams().then(res => setTeams(res))
    }, [setTeams])
    
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
                {teams.map(team => <CardTeamsRow key={team.id} id={team.id} teamName={team.name} teamDescription={team.description}/>)}
            </div>            
        </div>
    )
}

export default CardBodyTeams
