import React from 'react'
import './style.css'

function GeneralButton({buttonName}) {
    return (
        <div className="general-button">
            <a className="btn">{buttonName}</a> 
        </div>
    )
}

export default GeneralButton