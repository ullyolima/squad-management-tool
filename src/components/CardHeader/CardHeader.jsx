import React from 'react'
import AddButton from '../AddButton/AddButton'
import './style.css'


function CardHeader({title, button}) {
    return (
        <div className="card-header d-flex">
            <span className="card-title">{title}</span>     
            <div>{button}</div>   
        </div>
    )
}

export default CardHeader
