
import {useRef,useState,useEffect} from 'react';
function ApiUseEffects()
{
    const fidRef=useRef('');
    const [fid, setFid] = useState('');
    const [data, setData] = useState('');
   


    useEffect(()=>{
        fetch(`http://localhost:5000/api/facultydetails/${fid}`)
            .then(res=> res.json())
            .then(json=> setData(json));
    },[fid]);
    return(
        <>
        <input type='text' ref={fidRef}/>
        <input type="button" value="getData" onClick={()=>setFid(fidRef.current.value)}/>
        {
            data&&
                data.msg?
                <h1>{data.msg}</h1>:
                <div>
                    <h1>{data.fid}</h1>
                    <h1>{data.fname}</h1>
                    <h1>{data.mail}</h1>
                    <h1>{data.password}</h1>
                    <h1>{data.mno}</h1>
                    <h1>{data.gender}</h1>
                    <h1>{data.age}</h1>
                    <h1>{data.joiningDate}</h1>
                </div>
        }
        </>
)}

export default ApiUseEffects;

