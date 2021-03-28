import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { ComponentBase } from 'materialize-css'
import './dashboard.css'
import { NavLink } from 'react-router-dom'
function Dashborad(){
    const [email,setEmail]=useState('')
    useEffect(()=>{
        const email=sessionStorage.getItem("emailId")
        setEmail(email)
    },[])

    return(
        <div className="dashboard">
            <div className="sideNav">
            <NavLink class="waves-effect waves-light btn modal-trigger" to="/changePassword">Change Password</NavLink>   
            </div>
            <div className="body">
               <h1>Hi Welcome to Dashborad</h1>
            </div>
        </div>
    )

}
export default Dashborad