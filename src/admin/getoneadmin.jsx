
import {useRef,useState,useEffect} from 'react';
function ApiUseEffects()
{
    const aidRef=useRef('');
    const [aid, setAid] = useState('');
    const [data, setData] = useState('');
   


    useEffect(()=>{
        fetch(`http://localhost:5000/api/admindetails/${aid}`)
            .then(res=> res.json())
            .then(json=> setData(json));
    },[aid]);
    return(
        <>
        <input type='text' ref={aidRef}/>
        <input type="button" value="getData" onClick={()=>setAid(aidRef.current.value)}/>
        {
            data&&
                data.msg?
                <h1>{data.msg}</h1>:
                <div>
                    <h1>{data.aid}</h1>
                    <h1>{data.aname}</h1>
                    <h1>{data.mail}</h1>
                    <h1>{data.password}</h1>
                    <h1>{data.mno}</h1>
                    <h1>{data.gender}</h1>
                    <h1>{data.age}</h1>
                   
                </div>
        }
        </>
)}

export default ApiUseEffects;

