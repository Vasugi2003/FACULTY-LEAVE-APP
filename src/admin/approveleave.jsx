// import React, { useState, useEffect } from 'react';
// import { DataGrid } from '@mui/x-data-grid';

// const DataFetching = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       const response = await fetch('/api/data'); // Replace with your API endpoint
//       const json = await response.json();

//       // Assign a unique id to each row
//       const rows = json.map((row, index) => ({
//         id: index + 1, // Assuming index starts from 0
//         ...row,
//       }));

//       setData(rows);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   const handleApprove = (id) => {
//     // Update the status of the leave request to "Approved" in the backend
//     // You can make an API call to update the status

//     // Assuming you have a backend API endpoint for updating the status
//     fetch(`/api/data/${id}`, {
//       method: 'PATCH',
//       body: JSON.stringify({ status: 'Approved' }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((updatedRow) => {
//         // Update the data state with the updated row
//         const updatedData = data.map((row) =>
//           row.id === id ? { ...row, status: updatedRow.status } : row
//         );
//         setData(updatedData);
//       })
//       .catch((error) => console.error('Error approving leave request:', error));
//   };

//   const handleReject = (id) => {
//     // Update the status of the leave request to "Rejected" in the backend
//     // You can make an API call to update the status

//     // Assuming you have a backend API endpoint for updating the status
//     fetch(`/api/data/${id}`, {
//       method: 'PATCH',
//       body: JSON.stringify({ status: 'Rejected' }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//       .then((response) => response.json())
//       .then((updatedRow) => {
//         // Update the data state with the updated row
//         const updatedData = data.map((row) =>
//           row.id === id ? { ...row, status: updatedRow.status } : row
//         );
//         setData(updatedData);
//       })
//       .catch((error) => console.error('Error rejecting leave request:', error));
//   };

//   const columns = [
//     { field: 'id', headerName: 'ID', width: 100 },
//     { field: 'name', headerName: 'Name', width: 200 },
//     { field: 'leaveType', headerName: 'Leave Type', width: 150 },
//     { field: 'status', headerName: 'Status', width: 150 },
//     {
//       field: 'action',
//       headerName: 'Action',
//       width: 200,
//       renderCell: (params) => {
//         const id = params.row.id;
//         const status = params.row.status;

//         if (status === 'Pending') {
//           return (
//             <div>
//               <button onClick={() => handleApprove(id)}>Approve</button>
//               <button onClick={() => handleReject(id)}>Reject</button>
//             </div>
//           );
//         }

//         return null;
//       },
//     },
//   ];

// }











// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const LeaveRequests = () => {
//   const [leaveRequests, setLeaveRequests] = useState([]);

//   useEffect(() => {
//     fetchLeaveRequests();
//   }, []);

//   const fetchLeaveRequests = async () => {
//     try {
//       const response = await axios.get('http"//localhost:8080/api/leaverequests'); // Replace with your API endpoint
//       setLeaveRequests(response.data);
//     } catch (error) {
//       console.error('Error fetching leave requests:', error);
//     }
//   };

//   const handleApprove = async (fid) => {
//     try {
//       await axios.put(`http"//localhost:8080/api/leaverequests/${fid}/approve`); // Replace with your API endpoint
//       fetchLeaveRequests();
//     } catch (error) {
//       console.error('Error approving leave request:', error);
//     }
//   };

//   const handleReject = async (fid) => {
//     try {
//       await axios.put(`http"//localhost:8080/api/leaverequests/${fid}/reject`); // Replace with your API endpoint
//       fetchLeaveRequests();
//     } catch (error) {
//       console.error('Error rejecting leave request:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Leave Requests</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Faculty Name</th>
//             <th>Leave Type</th>
//             <th>Status</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaveRequests.map((request) => (
//             <tr key={request._id}>
//               <td>{request.facultyName}</td>
//               <td>{request.leaveType}</td>
//               <td>{request.status}</td>
//               <td>
//                 {request.status === 'Pending' && (
//                   <>
//                     <button onClick={() => handleApprove(request._id)}>Approve</button>
//                     <button onClick={() => handleReject(request._id)}>Reject</button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default LeaveRequests;




// LeaveRequestList.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LeaveRequestList = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);

  useEffect(() => {
    // Fetch leave requests from the server
    axios.get('http"//localhost:8080/api/leaverequests')
      .then((response) => {
        setLeaveRequests(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleStatusChange = (fid, status) => {
    axios.put(`http"//localhost:8080/api/leaverequests/${fid}`, { status })
      .then((response) => {
        // Update the leave request status in the frontend
        const updatedLeaveRequests = leaveRequests.map((leaveRequest) => {
          if (leaveRequest._fid === response.data._fid) {
            return response.data;
          }
          return leaveRequest;
        });
        setLeaveRequests(updatedLeaveRequests);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div style={{backgroundColor:'pink'}}>
      {leaveRequests.map((leaveRequest) => (
        <div style={{backgroundColor:'pink'}} key={leaveRequest._fid}>
          <p >Name: {leaveRequest.name}</p>
          <p>Leave: {leaveRequest.leave}</p>
          <p>Reason: {leaveRequest.reason}</p>
          <p>Status: {leaveRequest.status}</p>
          <button onClick={() => handleStatusChange(leaveRequest._id, 'Approved')}>Approve</button>
          <button onClick={() => handleStatusChange(leaveRequest._id, 'Rejected')}>Reject</button>
        </div>
      ))}
    </div>
  );
};

export default LeaveRequestList;
