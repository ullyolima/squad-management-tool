import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from '../components/Header/Header'
import MainContainer from '../components/MainContainer'
import CreateYourTeam from '../components/CreateYourTeam/CreateYourTeam'
import Footer from '../components/Footer/Footer'

function RoutesConfig() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" children={<MainContainer />} />
                <Route path="/create-your-team" children={<CreateYourTeam />} />
            </Switch>    
            <Footer />    
        </BrowserRouter>
    )
}

export default RoutesConfig
