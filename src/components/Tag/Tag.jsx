import React from 'react'
import './style.css'

function Tag({tagName}) {
    return (
        <span className="tag">
            <span>{tagName}</span>
            <span className="close-tag">x</span>
        </span>
    )
}

export default Tag
