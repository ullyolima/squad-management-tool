import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import CardContainer from './CardContainer/CardContainer'
import CardHeader from './CardHeader/CardHeader'
import AddButton from './AddButton/AddButton'
import CardBodyTeams from './CardBodyTeams/CardBodyTeams'
import CardBodyTop5 from './CardBodyTop5/CardBodyTop5'
import CardTop5Row from './CardTop5Row/CardTop5Row'
import HighestList from './HighestList/HighestList'
import LowestList from './LowestList/LowestList'

function MainContainer() {
    return (
        <div className="main-container">
            <Header />
            <div className="body-container">
                <div className="container">
                    <CardContainer customClass="card-teams" title="My Teams" button={<AddButton />} cardBody={<CardBodyTeams />}/>
                    <CardContainer customClass="card-top5" title="Top 5" cardBody={<CardBodyTop5 highestList={<HighestList />} lowestList={<LowestList />} />} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MainContainer
