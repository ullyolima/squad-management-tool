import React from 'react'
import FieldPlayer from '../FieldPlayer/FieldPlayer'
import GeneralButton from '../GeneralButton/GeneralButton'
import Player from '../Player/Player'
import './style.css'

function ConfigureSquad() {
    return (
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
                    <GeneralButton buttonName="Save" />
                </div>
                <div className="form-column">
                    <div className="search-players">
                        <label htmlFor="input-search-players" className="input-title">Search Players</label>
                        <input type="text" id="input-search-players" className="search-players__input" />
                        <div className="search-player__result">
                            <Player playerName="Cristiano Ronaldo" playerAge="32" playerNacionality="Portugual" />
                            <Player playerName="Ronaldo Luiz de Alves" playerAge="28" playerNacionality="Brazil" />
                            <Player playerName="Ronaldo Francisco" playerAge="18" playerNacionality="Brazil" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfigureSquad
