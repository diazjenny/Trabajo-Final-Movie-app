import React from 'react'
import './style.css'

const Main = ({children}) => {
    return (
        <div className="main-container">
            {children}
        </div>
    )
}

export default Main
