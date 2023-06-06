// import React from "react"
// import {useLocation} from 'react-router-dom';

// function Home (){
//     const location=useLocation()

//     return (
//         <div className="homepage">

//             <h1>Hello {location.state.id} and welcome to the home</h1>

//         </div>
//     )
// }

// export default Home



import React from 'react';
import './home.css';



import { Link } from "react-router-dom"
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>





const HomePage = () => {
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
          <li className="nav-item"> <Link to="/home" style={{textDecoration:'none',color:'black',margin:'10px'}}> Home </Link></li> <t></t>
          <li className="nav-item">
          <Link to="/" style={{textDecoration:'none',color:'black', margin:'10px'}}>Login</Link>
          </li>
          <li className="nav-item" > <Link to="/signup" style={{textDecoration:'none',color:'black',margin:'10px'}}>Faculty Registration</Link></li>
          
          <li className="nav-item"> <Link to="/alogin" style={{textDecoration:'none',color:'black',margin:'10px'}}> Admin </Link></li>
          {/* <li className="nav-item" style={{textDecoration:'none',color:'black', border:'solid 1px black',margin:'10px'}}>Logout</li> */}
        </ul>
      </nav>

      <div className="body-content">
        <div className="card">
          <h2>Apply for Leave</h2>
          <p>Fill out the leave application form.</p>
          <button> <Link to="/leavereq" style={{textDecoration:'none',color:'black'}}> Apply </Link></button>
        </div>

        <div className="card">
          <h2>Check Leave Status</h2>
          <p>View the status of your leave application.</p>
          <button>Check Status</button>
        </div>

        <div className="faculty-profile">
          <h2>Faculty Profile</h2>
          <p>Display faculty profile details here.</p>
        </div>
      </div>
    </div>


    <div>
        <h1>ABOUT US</h1> <br></br>
        <div style={{backgroundColor:'black', color:'white', width:'100%',height:'150px'}}>
        <p>
        A leave management system helps record, manage, and track staff's leave records. Staff's leave requests should be handled fairly while the work should not suffer during their absence. Leave requests can be tracked, approved, or denied easily with an automated leave management system.

Leave is a provision to stay away from work for genuine reasons with prior approval of the authorities. It may or be granted for a casual purpose, planned activity, on medical grounds, or in extraordinary conditions. Leave cannot be claimed as a matter of right. Accordingly, leave rules and norms have been categorized under various heads. Vacation and leave are governed by a set of rules and norms as laid down by the Government of India. Managing leaves of the faculty & staff for the entire year is a tedious process. Efficient leave management software is thus required to simplify the process.
        </p>
        </div>
        
<br></br>
    
      </div>

      <div className="body-content">
        <h1>CONTACT DETAILS</h1> <br></br>
        
        <h3>ADMIN OFFICE</h3> <br></br>
        KONGU ENGINEERING COLLEGE <br></br>
        Perundurai, Erode-638 060, Tamilnadu, India <br></br>
        Phone : 04294 - 226555, 226666, 226500 <br></br>
        <h3>PRINCIPAL</h3> <br></br>
        Phone : 04294 - 220583 <br></br>
        Fax : 04294 - 220087 <br></br>
        E-mail : principal@kongu.ac.in <br></br>
    
      </div>
  
    </>



    
  );
};

export default HomePage;

