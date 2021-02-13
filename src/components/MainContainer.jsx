import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import CardContainer from './CardContainer/CardContainer'
import CardHeader from './CardHeader/CardHeader'
import AddButton from './AddButton/AddButton'

function MainContainer() {
    return (
        <div className="main-container">
            <Header />
            <div className="body-container">
                <div className="container">
                    <CardContainer />
                    <CardContainer />

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MainContainer
