import React, { useEffect, useState } from 'react'
import './style.css'
import CardTop5Row from '../CardTop5Row/CardTop5Row'
import api from '../../service/api'

function HighestList() {

    const [highestAvg, setHighestAvg] = useState([])

    useEffect(() => {
        api.getHighestAvg().then(res => setHighestAvg(res))
    }, [setHighestAvg])

    return (
        <div className="highest-list">
            {highestAvg.map(avgTeam => <CardTop5Row key={avgTeam.id} teamName={avgTeam.name} teamScore={avgTeam.avgage} />)}
        </div>
    )
}

export default HighestList
