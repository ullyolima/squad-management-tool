import React from 'react'
import './style.css'

function FieldPlayer({playerNumber}) {
    return (
        <div className={`field-player ${playerNumber}`}>
            <div className="inner-circle">
                <span className="plus">+</span>
            </div>
        </div>
    )
}

export default FieldPlayer
