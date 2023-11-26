	// Function to approve attendance data for a given ID
	function approveAttendance(fid) {
		fetch(`/attendance/${fid}`, { method: 'PUT', body: JSON.stringify({ status: 'Approved' }), headers: { 'Content-Type': 'application/json' } })
			.then(response => response.json())
			.then(data => {
				// Show success message
				alert(`Attendance for ${data.date} has been approved.`);
				// Refresh attendance data
				getAttendance();
			})
			.catch(error => console.log(error));
        }
