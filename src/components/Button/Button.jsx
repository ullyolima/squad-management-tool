import React from 'react'
import './style.css'

function Button({buttonName}) {
    return (
        <div className="general-button">
            <a className="btn">{buttonName}</a> 
        </div>
    )
}

export default Button