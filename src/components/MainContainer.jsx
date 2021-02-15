import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import CardContainer from './CardContainer/CardContainer'
import CardHeader from './CardHeader/CardHeader'
import AddButton from './AddButton/AddButton'
import CardBodyTeams from './CardBodyTeams/CardBodyTeams'

function MainContainer() {
    return (
        <div className="main-container">
            <Header />
            <div className="body-container">
                <div className="container">
                    <CardContainer customClass="card-teams" title="My Teams" button={<AddButton />} cardBody={<CardBodyTeams />}/>
                    <CardContainer customClass="card-top5" title="Top 5"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MainContainer
