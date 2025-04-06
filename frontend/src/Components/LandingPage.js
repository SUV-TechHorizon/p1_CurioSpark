import React, { useState } from 'react'
import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'

function LandingPage() {
    const [activeSection, setActiveSection] = useState("home");
    return (
        <div className='landing_page'>
            <Header onSectionChange={setActiveSection} />
            <Body activeSection={activeSection} />
        </div>
    )
}

export default LandingPage
