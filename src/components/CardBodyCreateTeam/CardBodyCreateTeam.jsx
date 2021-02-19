import React, { useEffect, useState } from 'react'
import FieldPlayer from '../FieldPlayer/FieldPlayer'
import Player from '../Player/Player'
import Tag from '../Tag/Tag'
import './style.css'
import api from '../../service/api'
import Formations from '../Formations/Formations'
import { Redirect, useHistory, useParams } from 'react-router-dom'

function CardBodyCreateTeam() {

    const teamData = {
        name: "",
        description: "",
        players: [],
        tags: "",
        avgage: 0,
        type: "",
        teamwebsite: "",
        formation: 0
    }

    const [players, setPlayers] = useState([])

    const [selectedPlayers, setSelectedPlayers] = useState([])

    const [form, setForm] = useState(teamData)

    const {id} = useParams()

    useEffect(() => {
        api.getPlayers().then(res => setPlayers(res))
    }, [setPlayers])

    useEffect(() => {
        api.getTeamsById(id).then(res => setForm(res))
    }, [setForm, id])
    
    function handleChange(e) {
        setForm(prevState => ({...prevState, [e.target.name]: e.target.value, players: selectedPlayers})) 
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(id) {
            api.editTeam(id, form)
        } else {
            api.createTeam(form)
        }
    }

    return (
        <div className="card-body__create-team">
            <form onSubmit={handleSubmit}>
                <div className="team-information">
                    <h3 className="create-team__subtitle">Team information</h3>
                    <div className="form-grid">
                        <div className="form-column">
                            <div className="form-group form-team-name">
                                <label htmlFor="form__team-name" className="input-title">Team name</label>
                                <input type="text" name="name" value={form.name} onChange={handleChange} id="form__team-name" placeholder="Insert team name" required />
                            </div>
                            <div className="form-team-description">
                                <label htmlFor="description" className="input-title">Description</label>
                                <textarea name="description" value={form.description} onChange={handleChange} id="form__team-description"></textarea>
                            </div>
                        </div>
                        <div className="form-column">
                            <div className="form-group form-team-website">
                                <label htmlFor="teamwebsite" className="input-title">Team website</label>
                                <input type="url" name="teamwebsite" value={form.teamwebsite} onChange={handleChange} id="form__team-website" placeholder="http://myteam.com" />
                            </div>
                            <div className="form-group form-team-type">
                                <span className="input-title">Team type</span>
                                <input type="radio" name="type" value={form.type} onChange={handleChange} id="form__team-real" value="real" defaultChecked />
                                <label htmlFor="type">Real</label>
                                <input type="radio" name="type" value={form.type} onChange={handleChange} id="form__team-fantasy" value="fantasy" />
                                <label htmlFor="type">Fantasy</label>
                            </div>
                            <div className="form-group form-team-tags">
                                <label htmlFor="tags" className="input-title">Tags</label>
                                <div className="tag-container">
                                    <Tag tagName="BR" />
                                    <Tag tagName="BWT" />
                                    <Tag tagName="Attack" />
                                    <input type="text" name="tags" value={form.tags} onChange={handleChange} id="form__tags" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="configure-squad">
                    <h3 className="create-team__subtitle">Configure Squad</h3>
                    <div className="form-grid">
                        <div className="form-column">
                            <label htmlFor="formation" className="input-title">Formation</label>
                            <select value={form.formation} onChange={handleChange} name="formation" id="configure-squad__formation">
                                <option value="3223">3 - 2 - 2 - 3</option>
                                <option value="3232">3 - 2 - 3 - 2</option>
                                <option value="343">3 - 4 - 3</option>
                                <option value="352">3 - 5 - 2</option>
                                <option value="4231">4 - 2 - 3 - 1</option>
                                <option value="4311">4 - 3 - 1 - 1</option>
                                <option value="432">4 - 3 - 2</option>
                                <option value="442">4 - 4 - 2</option>
                                <option value="451">4 - 5 - 1</option>
                                <option value="541">5 - 4 -1</option>
                            </select>

                            <div className="soccer-field">
                                <div className="field-circle"></div>
                                <div className="field-line"></div>
                                <Formations formationNumber="3223" />                                
                            </div>
                            <button type="submit" className="submit-button">Save</button>
                        </div>
                        <div className="form-column">
                            <div className="search-players">
                                <label htmlFor="input-search-players" className="input-title">Search Players</label>
                                <input type="text" id="input-search-players" className="search-players__input" />
                                <div className="search-player__result">
                                    {players.map(player => <Player setSelectedPlayers={setSelectedPlayers} selected={!!form.players.find(playerId => playerId === player.id )} key={player.id} id={player.id} playerName={player.name} playerAge={player.age} playerNacionality={player.nacionality} />)}
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
