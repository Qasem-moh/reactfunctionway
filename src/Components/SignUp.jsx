import React, { useState } from "react";
import "../App.css";
import axios from "axios";
function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordR, setPasswordR] = useState("");
  const [accept,setAccept]=useState(false)
  const [emailError,setEmailError]=useState("")
  async function submit(e){
    let flag=true
    e.preventDefault();
    setAccept(true)
    if(name===""||password.length<8||passwordR!==password){
        flag=false
    }else flag=true
    try {
      if(flag){
        //send data
     let res=await axios.post('http://127.0.0.1:8000/api/register',{
            name:name,
            email:email,
            password:password,
            password_confirmation:passwordR
        }).then((t)=>console.log(t))
        
    }
    } catch (error) {
      console.log(error.response.status);
      
      setEmailError(error.response.status)
    }
  }
  return (
    <div className="father">
      <form onSubmit={submit}>
        <label htmlFor="userName">User Name: </label>
        <input
          type="text"
          id="userName"
          placeholder="Name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          placeholder="email..."
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {accept&&emailError===422&&<p>the email already has been taken</p>}

        <label htmlFor="password"> password: </label>
        <input
          type="password"
          id="password"
          placeholder="password..."
          required
          onChange={(e) => setPassword(e.target.value)}
        />
{password.length<8&&accept&&(<p>password most be more than 8 charcters</p>)}
        <label htmlFor="repeatPassword"> repeat Password: </label>
        <input
          type="password"
          id="repeatPassword"
          placeholder="repeat  password..."
          value={passwordR}
          onChange={(e) => setPasswordR(e.target.value)}
        />
        {passwordR!==password&&accept&&(<p>password dose not match</p>)}
        <div>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
