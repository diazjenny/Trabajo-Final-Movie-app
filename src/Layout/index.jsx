import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'


const Layout = ({children}) => {
    return (
        <>
            <Header />   
            <Main>
                {children}
            </Main>
            <Footer />
        </>
    )
}

export default Layout
