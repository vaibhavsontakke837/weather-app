import {useNavigate} from "react-router-dom"
import  { useState } from "react"
import {GrLinkNext} from "react-icons/gr"
import "./Dashoard.css"
const Dashboard=()=>{
    const navigate=useNavigate()
    const [cityname,setCityname]=useState()

    const weatherHandler = ()=>{
        if(!isNaN(cityname)){
            alert("Please enter valid city")
        }else if(!cityname){
            alert("please enter city name")
        }else{
            navigate(`/weather-details`+"/"+cityname)
        }   
    } 
    return(
        <form className="dashboard">
            <h1>Weather App</h1>
            <input className="inputData" placeholder="Enter city name" onChange={(e)=> setCityname(e.target.value)} type="text" />
            <button onClick={weatherHandler}><GrLinkNext size="40px" /></button>            
        </form>
    )
}
export default Dashboard