import React from 'react'
import './style.css'
import sortIcon from "../../assets/img/sort-icon.png"

function CardBodyTeams() {
    return (
        <div className="card-body-teams">
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
            
        </div>
    )
}

export default CardBodyTeams
