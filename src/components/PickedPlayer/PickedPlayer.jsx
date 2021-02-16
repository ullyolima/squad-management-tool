import React from 'react'
import './style.css'
import player1 from "../../assets/img/player1.jpg"
import player2 from "../../assets/img/player2.jpg"

function PickedPlayer() {
    return (
        <div className="picked-player">
            <div className="most-picked-player">
                <span className="picked-player__title">Most Picked Player</span>
                <div className="d-flex picture-percetage-wrap">
                    <div className="picture-moldure">
                        <img src={player1} className="player-picture" alt="" />
                    </div>
                    <div>
                        <div className="percentage">75%</div>
                        <div className="border-btt"></div>
                    </div>
                </div>
            </div>
            <div className="less-picked-player">
                <span className="picked-player__title">Less Picked Player</span>
                <div className="d-flex picture-percetage-wrap">
                    <div className="picture-moldure">
                        <img src={player2} className="player-picture" alt="" />
                    </div>
                    <div>
                        <div className="percentage">25%</div>
                        <div className="border-btt"></div>
                    </div>
                </div>
            </div>
            <div className="circle"></div>
        </div>
    )
}

export default PickedPlayer
