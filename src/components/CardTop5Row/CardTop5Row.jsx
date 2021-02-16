import React from 'react'
import './style.css'

function CardTop5Row({teamName, teamScore}) {
    return (
        <div className="card-top5-row d-flex">
            <div className="team-name">{teamName}</div>  
            <div className="team-score">{teamScore}</div>       
        </div>
    )
}

export default CardTop5Row
