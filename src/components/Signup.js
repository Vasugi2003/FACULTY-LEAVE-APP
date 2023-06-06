import React, {  useState } from "react"
import "./signup.css"
import { Link } from "react-router-dom";



const FacultyFormComponent = ({ addFaculty }) => {

    const [fid, setFid] = useState('');
    const [fname, setFname] = useState('');
    const [mail,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [dept,setDept]= useState('')
    
    const [mno,setMno] = React.useState('');
    const [gender,setGender] = React.useState('');
    const [age, setAge] = React.useState('');
    const [joiningDate, setDate] = React.useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const newFaculty = {
            fid:fid,
            fname:fname,
            mail:mail,
            password:password,
            dept:dept,
            mno:mno,
            gender:gender,
            age:age,
            joiningDate:joiningDate
        };
    
        try {
          const response = await fetch('http://localhost:5000/api/facultydetails', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newFaculty),
          });
          const data = await response.json();
          addFaculty(data);
          // Clear form fields after successful submission
          setFid('');
          setFname('');
          setEmail('');
          setPassword('');
          setDept('');
          setMno('');
          setGender('');
          setAge('');
          setDate('');
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
              {/* <li className="nav-item" style={{textDecoration:'none',color:'black', border:'solid 1px black', margin:'10px'}}>Logout</li> */}
            </ul>
          </nav>
       


        <main>
		
		<h3>REGISTER AS FACULTY</h3>
		<p>Please fill out the following form if you are a faculty!!!!!</p>
        <div>
          <h2>FACULTY DETAILS</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="fid">Faculty id:</label>
            <input
              type="text"
              id="fid"
              value={fid}
              onChange={(e) => setFid(e.target.value)}
            />
    <br></br>
            <label htmlFor="fname">Faculty Name:</label>
            <input
              type="text"
              id="fname"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
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
            <label htmlFor="dept">Department</label>
            <input
              type="dept"
              id="dept"
              value={dept}
              onChange={(e) => setDept(e.target.value)}
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
            <label htmlFor="gender">Gender:</label>
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
            <label htmlFor="joiningDate">Joining Date:</label>
            <input
              type="date"
              id="joiningDate"
              value={joiningDate}
              onChange={(e) => setDate(e.target.value)}
            />
    <br></br>
            <button type="submit" style={{textDecoration:'none',color:'black'}}>Add</button>
          </form>
        </div>
        <p id="res"></p>
			</main>
      </div></>
				
      );
    };
    
    export default FacultyFormComponent;
    