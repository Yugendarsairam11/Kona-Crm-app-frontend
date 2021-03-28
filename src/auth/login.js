import axios from 'axios'
import React, { useState } from 'react'
import './login.css'
import {useHistory} from 'react-router-dom'

function Login(){
    // const history = useHistory()

    const[data,setdata]=useState({})

    const capturedata=(event)=>{
        var name=event.target.name
        var value=event.target.value
        setdata({
            ...data,[name]:value
        })
        
    }

    const loginuser=()=>{
        axios.post('http://localhost:9011/user/login',data).then(response=>{
            if(response.data.result){
                console.log(response.data.result)
                localStorage.setItem('emailId',data.emailId)
                localStorage.setItem('token',response.data.token)
                sessionStorage.setItem("emailId",data.emailId)
                alert('user signed in')
                // history.push('/dashboard')

            }
            else{
                alert('dengey bey register ayyi ra')
            }
        })
    }
    
    return(
        
        <div className="login">
        
                <h3><b>Kona-Digital.ai</b></h3>
                        <br></br>
                <div className="loginbox">
                    <h5>SignIn</h5>
                        <br /><br />
                    <div class="input-field col s12">
                        <input  id="emailId" type="text" name="emailId" onChange={capturedata} />
                        <label class="active" for="emailId"><b>Email</b></label>
                    </div>
                        <br/><br/>
                    <div class="input-field col s12">
                        <input  id="password" type="password" name="password" onChange={capturedata} />
                        <label class="active" for="password"><b>Password</b></label>
                    </div>
                    <br/><br/><br/>
                    <div class="input-field col s12">
                    <button onClick={loginuser} class="waves-effect waves-light btn-large red">Sign In</button>
                    </div>
                </div>
        </div>
    
    )
}
export default Login