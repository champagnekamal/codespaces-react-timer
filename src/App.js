import {React, useState, useEffect} from 'react'
import './App.css';

const App = () => {
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isrun, setIsrun] = useState(false);

useEffect(()=>{
  let timerid;
if(isrun){
  timerid= setInterval(() => {
    setTime((prevtime)=> prevtime - 10)
  }, 10);
}
  

  return()=> clearInterval(timerid)
},[isrun])

useEffect(()=>{
  if(time <= 0){
    setIsrun(false)
  }

},[time])

const start =()=>{
  setTime(duration * 3600000);
  setIsrun(true);
}
const stop=()=>{
  setIsrun(false);
}
const reset=()=>{
  setIsrun(false)
  setTime(duration);
}

const handlechange = (e)=>{
  setDuration(e.target.value)
}

const formattime = (time)=>{
  const days = Math.floor(time / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
  const hours = Math.floor(time / (1000 * 60 * 60) % 24).toString().padStart(2, '0');
  const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
  const seconds = Math.floor((time % (1000 * 60)) / 1000).toString().padStart(2, '0');
  const milliseconds = Math.floor(time % 1000).toString().padStart(3, '0');

  return `${days}: ${hours}: ${minutes}: ${seconds}: ${milliseconds}`
}

  return (
    <div>
      <div className='time'>{formattime(time)}</div>
      <div>[DD:HH:MM:SS]</div>
      <button className='btn' onClick={start}>Start</button>
      <button className='btn' onClick={stop}>Stop</button>
      <button className='btn' onClick={reset}>Reset</button>
      <input type="number" value={duration} onChange={handlechange}/>
    </div>
  )
}

export default App