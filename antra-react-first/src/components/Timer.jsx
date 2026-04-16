

import React from 'react'
import {useState,  useEffect} from 'react'

const Timer = () => {
    const [minute, setMinute] = useState(0);
    const [second, setSecond] = useState(0);
    const [timeLeft, setTimeLeft] = useState(0); // Total time in seconds
    const [isActive, setIsActive] = useState(false);
    
  //  This handles the actual counting down ---
  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);
    
    const handleInputValueMinutes = (e) => {
      setMinute(e.target.value);
    };
    
       const handleInputValueSeconds = (e) => {
      setSecond(e.target.value);
    };
    const start = () => {
    const total = parseInt(minute) * 60 + parseInt(second);
    setTimeLeft(total);
    setIsActive(true);
  };
    const formatTime = () => {
    const m = Math.floor(timeLeft / 60).toString().padStart(2,'0');
    const s = (timeLeft % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };
   
  return(
    <div style={{ textAlign: 'center' }}>
      <h1 style={{color: 'blue'}}>Timer</h1>
    <div>
      <input type = "number"
      placeholder = "0"
      value={minute}
      onChange= {handleInputValueMinutes}></input>
      <label>Minutes</label>
      
      <input type="number"
      placeholder = "0"
      value={second}
      onChange={handleInputValueSeconds}></input>
      <label>Seconds</label>
      
      <button onClick={start}>Start</button>
      
      <div style={{ marginTop: '10px' }}>
      <button onClick={() => setIsActive(!isActive)}>
     {isActive ? 'PAUSE/RESUME' : 'RESUME/RESUME'}
     </button>
    <button onClick= {() => setTimeLeft(0)}> RESET </button>
    </div>
        <h1 style={{fontsize:"50px"}}>{formatTime()}</h1>
    </div>
    </div>
    
    );
};
export default Timer;