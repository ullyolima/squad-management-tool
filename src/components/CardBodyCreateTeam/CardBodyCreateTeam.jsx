import React, { useEffect, useState } from 'react'
import FieldPlayer from '../FieldPlayer/FieldPlayer'
import Player from '../Player/Player'
import Tag from '../Tag/Tag'
import './style.css'
import api from '../../service/api'

function CardBodyCreateTeam() {

    const [players, setPlayers] = useState([])

    useEffect(() => {
        api.getPlayers().then(res => setPlayers(res))
    }, [setPlayers])

    const teamData = {
        id: "",
        name: " ",
        description: "",
        players: [],
        tags: [],
        avgage: 0,
        type: "",
        teamwebsite: "",
        formation: 0
    }

    const [form, setForm] = useState(teamData)


    return (
        <div className="card-body__create-team">
            <form action="">
                <div className="team-information">
                    <h3 className="create-team__subtitle">Team information</h3>
                    <div className="form-grid">
                        <div className="form-column">
                            <div className="form-group form-team-name">
                                <label htmlFor="form__team-name" className="input-title">Team name</label>
                                <input onChange={(e) => setForm(teamData.name = e.target.value)} type="text" id="form__team-name" placeholder="Insert team name" required />
                            </div>
                            <div className="form-team-description">
                                <label htmlFor="form__team-description" className="input-title">Description</label>
                                <textarea name="form-team-description" id="form__team-description"></textarea>
                            </div>
                        </div>
                        <div className="form-column">
                            <div className="form-group form-team-website">
                                <label htmlFor="form__team-website" className="input-title">Team website</label>
                                <input type="url" id="form__team-website" placeholder="http://myteam.com" />
                            </div>
                            <div className="form-group form-team-type">
                                <span className="input-title">Team type</span>
                                <input type="radio" name="form-team-type" id="form__team-real" value="real" defaultChecked />
                                <label htmlFor="form__team-real">Real</label>
                                <input type="radio" name="form-team-type" id="form__team-fantasy" value="fantasy" />
                                <label htmlFor="">Fantasy</label>
                            </div>
                            <div className="form-group form-team-tags">
                                <label htmlFor="form__tags" className="input-title">Tags</label>
                                <div className="tag-container">
                                    <Tag tagName="BR" />
                                    <Tag tagName="BWT" />
                                    <Tag tagName="Attack" />
                                    <input type="text" name="form-tags" id="form__tags" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="configure-squad">
                    <h3 className="create-team__subtitle">Configure Squad</h3>
                    <div className="form-grid">
                        <div className="form-column">
                            <label htmlFor="configure-squad__formation" className="input-title">Formation</label>
                            <select name="configure-team-formation" id="configure-squad__formation">
                                <option value="">3 - 2 - 2 - 3</option>
                                <option value="">3 - 2 - 3 - 2</option>
                                <option value="">3 - 4 - 3</option>
                                <option value="">3 - 5 - 2</option>
                                <option value="">4 - 2 - 3 - 1</option>
                                <option value="">4 - 3 - 1 - 1</option>
                                <option value="">4 - 3 - 2</option>
                                <option value="">4 - 4 - 2</option>
                                <option value="">4 - 5 - 1</option>
                                <option value="">5 - 4 -1</option>
                            </select>

                            <div className="soccer-field">
                                <div className="field-circle"></div>
                                <div className="field-line"></div>
                                <div className="soccer-formation" data-formation="3232">
                                    <div className="d-flex l-1">
                                        <FieldPlayer />
                                        <FieldPlayer />
                                        <FieldPlayer />
                                    </div>
                                    <div className="d-flex l-2">
                                        <FieldPlayer />
                                        <FieldPlayer />
                                    </div>
                                    <div className="d-flex l-3">
                                        <FieldPlayer />
                                        <FieldPlayer />
                                        <FieldPlayer />
                                    </div>
                                    <div className="d-flex l-4">
                                        <FieldPlayer />
                                        <FieldPlayer />
                                    </div>
                                    <div className="d-flex kepper">
                                        <FieldPlayer />
                                    </div>
                                </div>
                                {/* <div className="soccer-formation" data-formation="3223">
                            <div className="d-flex l-1">
                                <FieldPlayer />
                                <FieldPlayer />
                                <FieldPlayer />
                            </div>
                            <div className="d-flex l-2">
                                <FieldPlayer />
                                <FieldPlayer />
                            </div>
                            <div className="d-flex l-3">
                                <FieldPlayer />
                                <FieldPlayer />
                            </div>
                            <div className="d-flex l-4">
                                <FieldPlayer />
                                <FieldPlayer />
                                <FieldPlayer />
                            </div>
                            <div className="d-flex kepper">
                                <FieldPlayer />
                            </div>
                        </div> */}
                            </div>
                            <button onClick={console.log(form)} type="submit" className="submit-button">Save</button>
                        </div>
                        <div className="form-column">
                            <div className="search-players">
                                <label htmlFor="input-search-players" className="input-title">Search Players</label>
                                <input type="text" id="input-search-players" className="search-players__input" />
                                <div className="search-player__result">
                                    {players.map(player => <Player key={player.id} id={player.id} playerName={player.name} playerAge={player.age} playerNacionality={player.nacionality} />)}     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CardBodyCreateTeam
