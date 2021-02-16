import React from 'react'
import CardTop5Row from '../CardTop5Row/CardTop5Row'

function LowestList() {
    return (
        <div className="lowest-list">
            <CardTop5Row teamName="Zagiris Vilnus" teamScore="21.9" />
            <CardTop5Row teamName="Vilgardium LV" teamScore="21.7" />
            <CardTop5Row teamName="Avada Kedavra" teamScore="21.6" />
            <CardTop5Row teamName="Bestial FC" teamScore="21.4" />
            <CardTop5Row teamName="BMP" teamScore="21.3" />
        </div>
    )
}

export default LowestList
