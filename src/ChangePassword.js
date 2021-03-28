import React, { useState } from 'react'
import axios from 'axios'
 function ChangePassword(){
     const [data,setdata]=useState({})
     const capturedata=(event)=>{
           var name=event.target.name
            var value=event.target.value
            setdata({
                ...data,[name]:value
            })
     }
     const updateuser=(event)=>{
         console.log(data)
         axios.put("http://localhost:9011/user/updatepassword",data).then(res=>{
            if(res.data.status){
                alert("password updated")
            }
            else{
                alert("password is not updated")
            }
        })
    }
     return(
     <div>
             <h3><b>Kona-Digital.ai</b></h3>
                        <br></br>
                <div className="loginbox">
                    <h5>Password Update</h5>
                        <br /><br />
                    <div class="input-field col s12">
                        <input  id="emailId" type="text" name="emailId" onChange={capturedata} />
                        <label class="active" for="emailId"><b>Email</b></label>
                    </div>
                        <br/><br/>
                    <div class="input-field col s12">
                        <input  id="password" type="password" name="password" onChange={capturedata} />
                        <label class="active" for="password"><b>NewPassword</b></label>
                    </div>
                    <br/><br/><br/>
                    <div class="input-field col s12">
                    <button onClick={updateuser} class="waves-effect waves-light btn-large red">Sign In</button>
                    </div>
                </div>
     </div>
     )
 }
 export default ChangePassword;