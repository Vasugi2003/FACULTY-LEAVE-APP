import React, {  useState } from "react"
import "./signup.css"
import './home.css';



import { Link } from "react-router-dom"
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>




const AdminFormComponent = ({ addAdmin }) => {

    const [aid, setAid] = useState('');
    const [aname, setAname] = useState('');
    const [mail,setEmail]=useState('')
    const [password,setPassword]=useState('')
  
    
    const [mno,setMno] = React.useState('');
    const [gender,setGender] = React.useState('');
    const [age, setAge] = React.useState('');
   


    // async function submit(e){
    //     e.preventDefault();
    //     console.log(fid);
    //     console.log(fname);
    //     console.log(email);
    //     console.log(password);
    //     console.log(dept);
    //     console.log(mno);
    //     console.log(gender);
    //     console.log(age);
    //     console.log(joiningDate);

    //     try{

    //         await axios.post("http://localhost:8000/api/signup",{
    //             email,password
    //         })
    //         .then(res=>{
    //             if(res.data==="exist"){
    //                 alert("User already exists")
    //             }
    //             else if(res.data==="notexist"){
    //                 history("/home",{state:{id:email}})
    //             }
    //         })
    //         .catch(e=>{
    //             alert("wrong details")
    //             console.log(e);
    //         })

    //     }
    //     catch(e){
    //         console.log(e);

    //     }

    // }


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const newAdmin = {
            aid:aid,
            aname:aname,
            mail:mail,
            password:password,
          
            mno:mno,
            gender:gender,
            age:age
        };
    
        try {
          const response = await fetch('http://localhost:5000/api/admindetails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAdmin),
          });
          const data = await response.json();
          addAdmin(data);
          // Clear form fields after successful submission
          setAid('');
          setAname('');
          setEmail('');
          setPassword('');
    
          setMno('');
          setGender('');
          setAge('');
      
        } catch (error) {
          console.log('Error:', error);
        }
      };
    


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
              <li className="nav-item"> <Link to="/home" style={{textDecoration:'none',color:'black', margin:'10px'}}> Home </Link></li>
              <li className="nav-item">
              <Link to="/" style={{textDecoration:'none',color:'black', margin:'10px'}}>Login</Link>
              </li>
              <li className="nav-item" > <Link to="/signup" style={{textDecoration:'none',color:'black', margin:'10px'}}>Faculty Registration</Link></li>
              
              <li className="nav-item"> <Link to="/alogin" style={{textDecoration:'none',color:'black', margin:'10px'}}> Admin </Link></li>
              {/* <li className="nav-item" style={{textDecoration:'none',color:'black',, margin:'10px'}}>Logout</li> */}
            </ul>
          </nav>
        
     <main>

		<h3>REGISTER AS ADMIN</h3>
		<p>Please fill out the following form !!!!!</p>
        <div>
          <h2>ADMIN DETAILS</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="aid">ADMIN id:</label>
            <input
              type="text"
              id="aid"
              value={aid}
              onChange={(e) => setAid(e.target.value)}
            />
    <br></br>
            <label htmlFor="aname">Admin Name:</label>
            <input
              type="text"
              id="aname"
              value={aname}
              onChange={(e) => setAname(e.target.value)}
            />
    <br></br>
            <label htmlFor="mail">Email:</label>
            <input
              type="email"
              id="mail"
              value={mail}
              onChange={(e) => setEmail(e.target.value)}
            />
    <br></br>
     
            <label htmlFor="password">password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
<br></br>


    {/* <br></br>
            <label htmlFor="dept">Department:</label>
            <div>
                
                <select id="dept" value={dept} onChange={(e)=>setDept(e.target.value)}>
                    <option value="AI">AI</option>
                    <option value="IT">IT</option>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                </select>
            </div> */}
    <br></br>
            <label htmlFor="mno">Mobile number:</label>
            <input
              type="text"
              id="mno"
              value={mno}
              onChange={(e) => setMno(e.target.value)}
            />
    <br></br>
            <label htmlFor="gender">gender:</label>
              <div onChange={(e) => setGender(e.target.value)}>
              <input type="radio" value="male"/>MALE <br/>
              <input type="radio"  value="female"/> FEMALE<br/>
              </div>
            
    <br></br>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
    <br></br>
           
            <button type="submit" style={{textDecoration:'none',color:'white'}}>Add</button>
          </form>
        </div>
        <p id="res"></p>
			</main>
      </div>
      </>

				
      );
    };
    
    export default AdminFormComponent;
    