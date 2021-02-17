import React from 'react'
import './style.css'
import Tag from '../Tag/Tag'

function TeamInformation() {
    return (
        <div className="team-information">
            <h3 className="team-information__title">Team information</h3>
            <div className="form-grid">
                <div className="form-column">
                    <div className="form-group form-team-name">
                        <label htmlFor="form__team-name" className="input-title">Team name</label>
                        <input type="text" id="form__team-name" placeholder="Insert team name" required />
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
                        <input type="radio" name="form-team-type" id="form__team-real" />
                        <label htmlFor="form__team-real">Real</label>
                        <input type="radio" name="form-team-type" id="form__team-fantasy" />
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
    )
}

export default TeamInformation
