import React,{useState,useEffect} from 'react'
const Stopwatch=()=>
{
    const [hours,sethours] = useState(0);
    const [min,setmin] = useState(0);
    const [sec , setsec] = useState(0);
    const [milisec,setmilisec] = useState(0);
    const [stop , setstop] = useState(true);

    const starttimer =()=>
    {
      setstop(false); 
    } 
    const timerstop = ()=>
    {
        setstop(true);
    }
    const timerreset = ()=>
    {
        setmilisec(0);
        setsec(0);
        setmin(0);
        sethours(0);  
    }
    useEffect(()=>
    {
        let interval = null;
        interval = setInterval (()=>
        {
            if(!stop)
            {
                setmilisec(milisec+1);
                if(milisec>=59)
                {
                    setsec(sec+1);
                    setmilisec(0);
                    clearInterval(interval);
                }
                if(sec>=59)
                {
                    setmin(min+1);
                    setsec(0);
                    clearInterval(interval);
                }
                if(min>=59)
                {
                    sethours(hours+1);
                    setmin(0);
                    clearInterval(interval);
                }
            }
            else{
                clearInterval(interval);
            }
        },16.5)

        return()=>clearInterval(interval);
    });
    return(
        <div>
            <h1 id = "h1">React stop watch</h1>
            <div id = 'back'>
                <div id = "time">
                    <div>{hours < 10 ? "0" +hours : hours} : {min < 10 ? "0" + min : min} : {sec < 10? "0"+sec : sec} : {milisec < 10 ? "0"+ milisec : milisec}</div>
                </div>
                <div>
                    <button className="btns" onClick={starttimer}>start</button>  <button className="btns1" onClick ={timerstop}>stop</button>  <button className="btns2" onClick ={timerreset}>reset</button>
                </div>
            </div>
        </div>
    )
}

export default Stopwatch