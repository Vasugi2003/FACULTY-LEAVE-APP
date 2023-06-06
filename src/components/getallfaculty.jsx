import { useState, useEffect } from 'react';

function ApiGetall() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/facultydetails');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <input type="button" value="Get All" onClick={fetchData} />
      {data.length > 0 ? (
        data.map((item) => (
          <div key={item.fid}>
            <h1>{item.fid}</h1>
            <h1>{item.fname}</h1>
            <h1>{item.mail}</h1>
            <h1>{item.password}</h1>
            <h1>{item.mno}</h1>
            <h1>{item.gender}</h1>
            <h1>{item.age}</h1>
            <h1>{item.joiningDate}</h1>
          </div>
        ))
      ) : (
        <h1>No data available</h1>
      )}
    </>
  );
}

export default ApiGetall;
