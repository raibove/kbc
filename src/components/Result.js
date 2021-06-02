import React, {useState,useEffect} from 'react';
import { useLocation } from "react-router-dom";
import {BrowserRouter as Route, useHistory} from 'react-router-dom';

function Result() {
    const [prize,setPrize] = useState(0);
  const location = useLocation();
  let history=useHistory();

  useEffect(() => {
    setPrize(location.state.count);
 }, [location]);
  return (
    <div style={{backgroundColor:"#5e0479", width:'100vw', height:'100vh',margin:'auto', }}>
        <p style={{color:'white', textAlign:'center', padding:'50px', fontSize:'22px'}}>You have earned: ${prize*500}</p>
        <div style={{  display: 'flex',
                        justifyContent: 'center',
                        alignItems:  'center',
                    }}>
        <button style={{  backgroundColor: '#5e0479',
                            color: 'white',
                            marginTop: '20px',
                            textAlign:'center',
                            borderColor: 'gold',
                            width:'350px',
                            padding: '17px',
                            borderRadius: '22%',
        }}
        onClick={()=>{history.push('/')}}
        >Play Again</button>
        </div>
    </div>
  )
}
//  {location.state.count? location.state.count:""}
export default Result;
