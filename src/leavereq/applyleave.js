import React, {  useState } from "react"
import "./signup.css"
import { Link } from "react-router-dom";


const LeaveFormComponent = ({ addLeave }) => {

    const [fid, setFid] = useState('');
    const [name, setName] = useState('');
    const [mail,setEmail]=useState('')
    const [dept,setDept]= useState('')
    const [mno,setMno] = React.useState('');
    const [startDate,setStartdate] = React.useState('');
    const [endDate,setEnddate] = React.useState('');
    const [leave, setLeave] = React.useState('');
    const [reason, setReason] = React.useState('');
   



    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const newLeave = {
            fid:fid,
            name:name,
            mail:mail,
            dept:dept,
            mno:mno,
            startDate:startDate,
            endDate:endDate,
            leave:leave,
            reason:reason
        };
    
        try {
          const response = await fetch('http://localhost:8080/api/leaverequests', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newLeave),
          });
          const data = await response.json();
          addLeave(data);
          // Clear form fields after successful submission
          setFid('');
          setName('');
          setEmail('');
          setDept('');
          setMno('');
          setStartdate('');
          setEnddate('');
          setLeave('');
          setReason('');
          
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
              <li className="nav-item"> <Link to="/home" style={{textDecoration:'none',color:'black',margin:'10px'}}> Home </Link></li>
              <li className="nav-item">
              <Link to="/" style={{textDecoration:'none',color:'black',margin:'10px'}}>Login</Link>
              </li>
              <li className="nav-item" > <Link to="/signup" style={{textDecoration:'none',color:'black',margin:'10px'}}>Faculty Registration</Link></li>
              
              <li className="nav-item"> <Link to="/alogin" style={{textDecoration:'none',color:'black',margin:'10px'}}> Admin </Link></li>
              {/* <li className="nav-item" style={{textDecoration:'none',color:'black'}}>Logout</li> */}
            </ul>
          </nav>
       

        <main>
		
		<h3>APPLY FOR LEAVE</h3>
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
            <label htmlFor="name">Faculty Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
    
            <label htmlFor="dept">Department</label>
            <input
              type="dept"
              id="dept"
              value={dept}
              onChange={(e) => setDept(e.target.value)}
            />
    <br></br>


    <br></br>
            <label htmlFor="mno">Mobile number:</label>
            <input
              type="text"
              id="mno"
              value={mno}
              onChange={(e) => setMno(e.target.value)}
            />
    <br></br>
    <label htmlFor="startDate">Start Date:</label>
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartdate(e.target.value)}
            />
    <br></br>
    <label htmlFor="endDate">End Date:</label>
            <input
              type="date"
              id="startDate"
              value={endDate}
              onChange={(e) => setEnddate(e.target.value)}
            />
    <br></br>
    <label htmlFor="leave">Select leave type:</label>
              <div onChange={(e) => setLeave(e.target.value)}>
              <input type="radio" value="vacation"/>VACATION LEAVE <br/>
              <input type="radio"  value="sick"/> SICK LEAVE<br/>
              <input type="radio"  value="personal"/> PERSONAL LEAVE<br/>
              <input type="radio"  value="maternity"/> MATERNITY LEAVE<br/>
              
              </div>
            
    <br></br>
            <label htmlFor="reason">Reason for leave:</label>
            <input
              type="text"
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
    <br></br>
   
            {/* <button type="submit" >Add</button> */}

            <Link to="/success" style={{textDecoration:'none',color:'white'}}>Apply</Link>
          </form>
        </div>
        <p id="res"></p>
			</main>
      </div></>
				
      );
    };
    
    export default LeaveFormComponent;
    