import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom"
// import "./login.css"

const LeaveApproval = () => {
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

  const handleApprove = (id) => {
    const updatedData = data.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          status: 'Approved',
        };
      }
      return row;
    });

    setData(updatedData);
  };

  const handleReject = (id) => {
    const updatedData = data.map((row) => {
      if (row.id === id) {
        return {
          ...row,
          status: 'Rejected',
        };
      }
      return row;
    });

    setData(updatedData);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'fid', headerName: 'FID', width: 100 },
    { field: 'name', headerName: 'Name', width: 200 },
    { field: 'mail', headerName: 'Mail', width: 200 },
    { field: 'dept', headerName: 'Department', width: 100 },
    { field: 'mno', headerName: 'Mobile no:', width: 100 },
    { field: 'startDate', headerName: 'Start Date', width: 100 },
    { field: 'endDate', headerName: 'End Date', width: 100 },
    { field: 'leave', headerName: 'Leave Type', width: 100 },
    { field: 'reason', headerName: 'Reason', width: 100 },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
      renderCell: (params) => {
        const id = params.row.id;

        if (params.row.status === 'Approved') {
          return <span style={{ color: 'green' }}>Approved</span>;
        }

        if (params.row.status === 'Rejected') {
          return <span style={{ color: 'red' }}>Rejected</span>;
        }

        return (
          <div>
            <button onClick={() => handleApprove(id)}>Approve</button>
            <button onClick={() => handleReject(id)}>Reject</button>
          </div>
        );
      },
    },
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
          {/* <li className="nav-item" style={{textDecoration:'none',color:'black', border:'solid 1px black', margin:'10px'}}>Logout</li> */}
        </ul>
      </nav>
      </div>
    <div style={{ height: 400, width: '100%', color:'white' }}>
      <DataGrid columns={columns} rows={data} />
    </div>
    </>
  );
};

export default LeaveApproval;
