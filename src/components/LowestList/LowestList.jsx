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
            {lowestAvg.map(LowAvgTeam => <CardTop5Row key={LowAvgTeam.id} teamName={LowAvgTeam.name} teamScore={LowAvgTeam.avgage} />)}
        </div>
    )
}

export default LowestList
