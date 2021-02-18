import React, { useState } from 'react'
import './style.css'
import trashIcon from "../../assets/img/icon-trash.svg"
import shareIcon from "../../assets/img/icon-share.svg"
import editIcon from "../../assets/img/icon-edit.svg"
import classNames from "classnames"
import api from '../../service/api'

function CardTeamsRow({teamName, teamDescription, id}) {


    const [selected, setSelected] = useState(false)

    const cardTeamsRowClass = classNames({
        "team-row": true,
        selected: selected
    }) 
    
    function handleDelete(id) {
        api.deleteTeam(id)
        window.location.reload()
    }

    return (
        <div className={cardTeamsRowClass} onClick={() => setSelected(prevState => !prevState)}>
            <div className="team-name">
                <span>{teamName}</span>
            </div>
            <div className="team-description">
                <span>{teamDescription}</span>
            </div>
            <div className="team-options">
                <a className="delete-btn"><img src={trashIcon} onClick={() => handleDelete(id)} alt="Delete button"/></a>
                <a className="share-btn"><img src={shareIcon} alt="Share button"/></a>
                <a className="edit-btn"><img src={editIcon} alt="Edit button"/></a>
            </div>
        </div>
    )
}

export default CardTeamsRow
