import React from 'react'
import {NavLink} from 'react-router-dom'
import './home.css'

function Home(){
    return(
        <div className="home">
            <h1>Welcome to Kona Digital.ai</h1>
            <div className="buttons">
            <NavLink className="waves-effect waves-light btn-large red" to='/login'>Login</NavLink>
            <NavLink className="waves-effect waves-light btn-large red" to='/register'>Register</NavLink>
            </div>
        </div>
    )

}
export default Home