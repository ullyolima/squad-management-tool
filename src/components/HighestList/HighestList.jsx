import React from 'react'
import './style.css'
import CardTop5Row from '../CardTop5Row/CardTop5Row'

function HighestList() {
    return (
        <div className="highest-list">
            <CardTop5Row teamName="Inter Milan" teamScore="31.9" />
            <CardTop5Row teamName="APOEL Nicosia" teamScore="31.7" />
            <CardTop5Row teamName="AC Milan" teamScore="31.6" />
            <CardTop5Row teamName="Besiktas JK" teamScore="31.4" />
            <CardTop5Row teamName="Real Madrid BA" teamScore="31.3" />
        </div>
    )
}

export default HighestList
