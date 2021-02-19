import React from 'react'
import './style.css'

function FieldPlayer({playerNumber, nameInitials}) {
    return (
        <div className={`field-player ${playerNumber}`}>
            <div className="inner-circle">
                <span className="plus">{nameInitials}</span>
            </div>
        </div>
    )
}

export default FieldPlayer
