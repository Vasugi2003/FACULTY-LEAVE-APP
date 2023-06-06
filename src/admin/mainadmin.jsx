import React from "react";

import { Link } from "react-router-dom";

function Mainadmin(){

    return (

        <>
        <div className="containertop">
        <div className="item">
    
        </div>
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
              <li className="nav-item" > <Link to="/signup" style={{textDecoration:'none',color:'black',  margin:'10px'}}>Faculty Registration</Link></li>
              
              <li className="nav-item"> <Link to="/alogin" style={{textDecoration:'none',color:'black', margin:'10px'}}> Admin </Link></li>
              {/* <li className="nav-item" style={{textDecoration:'none',color:'black', border:'solid 1px black', margin:'10px'}}>Logout</li> */}
            </ul>
          </nav>
    
          <div className="body-content">
            <div className="card">
              <h2>GET ALL FACULTY DETAILS</h2>
              <p>Check all the faculties who are registered!!!</p>
              <button> <Link to="/dfetch" style={{textDecoration:'none',color:'black'}}> FETCH FACULTY </Link></button>
            </div>
    
            <div className="card">
              <h2>Check Faculties applied for leave</h2>
              <p>View the status of all leave application.</p>
              <button> <Link to="/lfetch" style={{textDecoration:'none',color:'black'}}>Check Status </Link> </button>
            </div>
    
            <div className="faculty-profile">
              <h2>Approve Leave Requests</h2>
              <p>As an Admin you can approve or reject leave requests!!!</p>
              <button> <Link to="/lapprove" style={{textDecoration:'none',color:'black'}}>Approve</Link> </button>
            </div>
          </div>
        </div>
        </>
    
        
    )
}
export default Mainadmin;