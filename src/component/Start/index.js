import React  from 'react'
import {useNavigate} from 'react-router-dom'
// import Timer from '../Timer';
import './style.css'

const Start = () => {
    const navigate = useNavigate();

    const changeRoute = (id)=>{
        navigate(`/card/${id}`);
    }
    return (
        <div>
            {/* <Timer /> */}
            <button onClick={()=>changeRoute(5)}>Easy</button>
            <button onClick={()=>changeRoute(7)}>Medium</button>
            <button onClick={()=>changeRoute(10)}>Hard</button>
            
        </div>
    )
}

export default Start