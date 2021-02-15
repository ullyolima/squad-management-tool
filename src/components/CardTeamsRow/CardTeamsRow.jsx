import React from 'react'
import './style.css'
import trashIcon from "../../assets/img/icon-trash.svg"
import shareIcon from "../../assets/img/icon-share.svg"
import editIcon from "../../assets/img/icon-edit.svg"


function CardTeamsRow({teamName, teamDescription}) {
    return (
        <div className="team-row">
            <div className="team-name">
                <span>{teamName}</span>
            </div>
            <div className="team-description">
                <span>{teamDescription}</span>
            </div>
            <div className="team-options">
                <a className="delete-btn"><img src={trashIcon} alt="Delete button"/></a>
                <a className="share-btn"><img src={shareIcon} alt="Share button"/></a>
                <a className="edit-btn"><img src={editIcon} alt="Edit button"/></a>
            </div>
        </div>
    )
}

export default CardTeamsRow
