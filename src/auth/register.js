import React, { useImperativeHandle, useRef, useState } from 'react'
import './register.css'
import axios from 'axios'
// import {useHistory} from 'react-router-dom'

function Register(){
    // const history=useHistory()
    const userref=useRef()
    const emailref=useRef()
    const passwordref=useRef()
    const confirmpass=useRef()
    const [user,setuser]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [emailval,setemailval]=useState(false)
    const [usernameval,setusernameval]=useState(false)
    const [passwordval,setpasswordval]=useState(false)

    const [data,setdata]=useState({})
    const registeruser=(event)=>{
        event.preventDefault()
        axios.post('http://localhost:9011/user/register',data).then(response=>{
            if(response){
                console.log(response) 
                // history.push('/login')  
            }
            

        })
    }
       
    const usernamedatavalidation=(event)=>{
        var value=event.target.value
        if(value.length<5){
            userref.current.innerHTML="length should be more than 5 characters"
            userref.current.style.color='red'
            setusernameval(false)

        }
        else{
            userref.current.innerHTML="All good !"
            userref.current.style.color='green'
            setuser(value)
            setusernameval(true)
        }
    }
    const emailvalidation=(event)=>{
        
        var pattern=/^[a-z A-Z 0-9]+@gmail.com$/
        var value=event.target.value
        if(pattern.test(value)){
            emailref.current.style.color='green'
            emailref.current.innerHTML="Email is correct"
            setemail(value)
            setemailval(true)

        }
        else{
            emailref.current.style.color='red'
            emailref.current.innerHTML="Email is not in proper format"
            setemailval(false)
        }

    }

    const passwordvalidation=(event)=>{
        var value=event.target.value
        if(value.length<6){
            passwordref.current.innerHTML="password should be more than 6 characters"
            passwordref.current.style.color="red"
            setpasswordval(false)
        }
        else{
            passwordref.current.innerHTML="valid password"
            passwordref.current.style.color="green"
            setpassword(value)
            setpasswordval(true)
        }
    }

    const confirmpassword=(event)=>{
        var value=event.target.value
        if(value==password){
            confirmpass.current.innerHTML="password is correct"
            confirmpass.current.style.color="green"
            setpasswordval(true)
        }
        else{
            confirmpass.current.innerHTML="password not matched"
            confirmpass.current.style.color="red"
        }
    }
    // var pattern=/^[a-z A-Z 0-9]+@gmail.com$/
    //array1=[{},{},{},{}]
    //array2=[...array1]
    // pattern.test
    return(
    <div className="register">
    <h3><b>Kona-Digital.ai</b></h3>
            <br></br>
    <div className="registerbox">
        <h5>Register</h5>
            <br />
            <div class="input-field col s12">
            <input  id="emailId" type="text" name="emailId" onBlur={emailvalidation} />
            <label class="active" for="emailId"><b>Email</b></label>
            <span ref={emailref}></span>
        </div>
            <br/>
            <div class="input-field col s12">
            <input  id="emailId" type="text" name="username" onChange={usernamedatavalidation} />
            <label class="active" for="emailId"><b>Username</b></label>
            <span ref={userref}></span>
        </div>
            <br/>
        <div class="input-field col s12">
            <input  id="emailId" type="text" name="password" onChange={passwordvalidation} />
            <label class="active" for="emailId"><b>Password</b></label>
            <span ref={passwordref}></span>
        </div>
            <br/>
        <div class="input-field col s12">
            <input  id="password" type="password" name="conform_password" onChange={confirmpassword} />
            <label class="active" for="password"><b>Confirm Password</b></label>
            <span ref={confirmpass}></span>
        </div>
        <br/><br/>
        <div class="input-field col s12">
        <button  onClick={registeruser} class="waves-effect waves-light btn-large red">Register</button>
        </div>
    </div>
</div>
    )
}
export default Register