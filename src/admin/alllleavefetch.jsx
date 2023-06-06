// import React, { useState, useEffect } from 'react';

// const DataFetching = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/api/facultydetails'); // Replace with your API endpoint
//       const json = await response.json();
//       setData(json);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Data Table</h2>
//       <table style={{background:"pink", border:"2px solid black",alignItems:"center",justifyContent:"center"}}>
//         <thead style={{border:"2px solid black"}}>
//           <tr style={{border:"2px solid black"}}>
//             <th>ID</th>
//             <th>Name</th>
//             <th>MAIL ID</th>
//             <th>MOBILE NO</th>
//             <th>GENDER</th>
//             <th>AGE</th>
//             <th>JOINING DATE</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item) => (
//             <tr key={item.id}>
//              <td>{item.fid}</td>
//             <td>{item.fname}</td>
//             <td>{item.mail}</td>
//             <td>{item.mno}</td>
//             <td>{item.gender}</td>
//             <td>{item.age}</td>
//             <td>{item.joiningDate}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataFetching;


import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";

const LeaveFetching = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/leaverequests'); // Replace with your API endpoint
      const json = await response.json();

      // Assign a unique id to each row
      const rows = json.map((row, index) => ({
        id: index + 1, // Assuming index starts from 0
        ...row,
      }));

      setData(rows);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fid', headerName: 'FID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'mail', headerName: 'Mail', width: 200 },
    
    { field: 'dept', headerName: 'Department', width: 100 },
    { field: 'mno', headerName: 'Mobile no:', width: 100 },
    { field: 'startDate', headerName: 'start date', width: 100 },
    { field: 'endDate', headerName: 'End Date', width: 100 },
    { field: 'leave', headerName: 'Leave type', width: 100 },
    { field: 'reason', headerName: 'Reason', width: 100 },
  ];

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
          <li className="nav-item"> <Link to="/home" style={{textDecoration:'none',color:'black',  margin:'10px'}}> Home </Link></li>
          <li className="nav-item">
          <Link to="/" style={{textDecoration:'none',color:'black', margin:'10px'}}>Login</Link>
          </li>
          <li className="nav-item" > <Link to="/signup" style={{textDecoration:'none',color:'black', margin:'10px'}}>Faculty Registration</Link></li>
          
          <li className="nav-item"> <Link to="/alogin" style={{textDecoration:'none',color:'black', margin:'10px'}}> Admin </Link></li>
          {/* <li className="nav-item" style={{textDecoration:'none',color:'black', margin:'10px'}}>Logout</li> */}
        </ul>
      </nav>
      </div>
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid columns={columns} rows={data} />
    </div>

    </>
  );
};

export default LeaveFetching;
