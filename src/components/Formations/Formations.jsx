import React from 'react'
import FieldPlayer from '../FieldPlayer/FieldPlayer'
import './style.css'

function Formations({formationNumber}) {
    return (
        <div className="soccer-formation" data-formation={formationNumber}>
            <FieldPlayer playerNumber="one" />
            <FieldPlayer playerNumber="two" />
            <FieldPlayer playerNumber="three" />
            <FieldPlayer playerNumber="four" />
            <FieldPlayer playerNumber="five" />
            <FieldPlayer playerNumber="six" />
            <FieldPlayer playerNumber="seven" />
            <FieldPlayer playerNumber="eigth" />
            <FieldPlayer playerNumber="nine" />
            <FieldPlayer playerNumber="ten" />
            <FieldPlayer playerNumber="kepper"/>
        </div>
    )
}

export default Formations
