import React from 'react'
import CardBodyCreateTeam from '../CardBodyCreateTeam/CardBodyCreateTeam'
import CardContainer from '../CardContainer/CardContainer'
import './style.css'

function CreateYourTeam() {
    return (
        <div className="create-your-team">
            <div className="body-container">
                <div className="container">
                    < CardContainer customClass="card-create-team" title="Create your team" cardBody={<CardBodyCreateTeam />} />
                </div>
            </div>
        </div>
    )
}

export default CreateYourTeam
