import React, {  useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import "./login.css"
import "./home.css"


function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:5000/api/facultydetails",{
                email,password
            })
            .then(res=>{
                if(res.data==="exist"){
                    history("/home",{state:{id:email}})
                }
                else if(res.data==="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <>
        <div className="containertop">
        <div className="item1" > 
        KONGU ENGINEERING COLLEGE </div>
        <div className="item1" > 
        FACULTY LEAVE MANAGEMENT SYSTEM
        </div>
        </div>
        
        <div className="home-page">
          <nav className="navbar">
            <ul className="nav-list">
              <li className="nav-item"> <Link to="/home" style={{textDecoration:'none',color:'black' , margin:'10px'}}> Home </Link></li>
              <li className="nav-item">
              <Link to="/" style={{textDecoration:'none',color:'black' , margin:'10px'}}>Login</Link>
              </li>
              <li className="nav-item" > <Link to="/signup" style={{textDecoration:'none',color:'black', margin:'10px'}}>Faculty Registration</Link></li>
              
              <li className="nav-item"> <Link to="/alogin" style={{textDecoration:'none',color:'black', margin:'10px'}}> Admin </Link></li>
              {/* <li className="nav-item" style={{textDecoration:'none',color:'black', border:'solid 1px black', margin:'10px'}}>Logout</li> */}
            </ul>
          </nav>
       
        <main>
		
		<p>If you are a faculty login here!!!!!</p>
        <div className="login">

            <h1>Login</h1>

            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <br></br>
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <br></br>
                {/* <button type="submit" value="submit" onClick={submit} /> */}
                <input type="submit" onClick={submit}/>

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/signup" style={{textDecoration:'none',color:'white'}}>Signup Page</Link>

        </div>
        <p id="res"></p>
			</main>
            </div>
            </>
    )
}

export default Login