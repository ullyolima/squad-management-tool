import React, { useEffect, useState } from 'react'
import CardTop5Row from '../CardTop5Row/CardTop5Row'
import api from '../../service/api'

function LowestList() {

    const [lowestAvg, setLowestAvg] = useState([])

    useEffect(() => {
        api.getLowestAvg().then( res => setLowestAvg(res))
    }, [setLowestAvg])

    return (
        <div className="lowest-list">
            {lowestAvg.map(avgTeam => <CardTop5Row key={avgTeam.id} teamName={avgTeam.name} teamScore={avgTeam.avgage} />)}
        </div>
    )
}

export default LowestList
