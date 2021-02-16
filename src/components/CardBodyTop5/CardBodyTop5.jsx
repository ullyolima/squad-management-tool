import React from 'react'
import './style.css'

function CardBodyTop5({ highestList, lowestList }) {
    return (
        <div className="card-body-top5">
            <div className="highest-avg">
                <h3 className="sec-title">Highest avg age</h3>
                <div className="avg-container">
                    {highestList}
                </div>
            </div>
            <div className="lowest-avg">
                <h3 className="sec-title">Lowest avg age</h3>
                <div className="avg-container">
                    {lowestList}
                </div>
            </div>
        </div>
    )
}

export default CardBodyTop5
