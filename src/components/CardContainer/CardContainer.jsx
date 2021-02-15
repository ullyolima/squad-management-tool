import React from 'react'
import './style.css'
import CardHeader from '../CardHeader/CardHeader'

function CardContainer({customClass, title, button, cardBody}) {
    return (
        <div className={`card-container ${customClass}`}>
            <CardHeader title={title} button={button}/>
            <div>{cardBody}</div>
        </div>
    )
}

export default CardContainer
