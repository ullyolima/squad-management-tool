import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import MainContainer from '../components/MainContainer'
import CreateYourTeam from '../components/CreateYourTeam/CreateYourTeam'
import Footer from '../components/Footer/Footer'

function RoutesConfig() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<MainContainer />} />
                <Route path="create-your-team" element={<CreateYourTeam />} />
            </Routes>    
            <Footer />    
        </BrowserRouter>
    )
}

export default RoutesConfig
