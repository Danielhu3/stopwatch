import React from 'react'
import  Button  from './button/'
import  Buttons  from './buttons/'
import  Stopwatch  from './stopwatch/'
import  StopwatchTime  from './stopwatchTime/'
import { Container } from './style'

import  Title  from './title/'

const Index = () => {
    const [isRunning, setIsRunning] = React.useState(false)
    const [time, setTime] = React.useState(0)

    function playAndStop(){
        setIsRunning((isRunning)=> !isRunning)
    }

    function reset(){
        setIsRunning(false)
        setTime(0)
    }

    function calculateValue( divisor:number, module:number){
        return ('0' + Math.floor((time/divisor) % module)).slice(-2)

    }

    React.useEffect(()=>{
        let interval:ReturnType<typeof setInterval>;
        if(isRunning){
            
            interval = setInterval(()=>{
                setTime((prevTime)=> prevTime + 10)
            },10)
        }

        return () => clearInterval(interval);

    },[isRunning])
    return (
    <Container>
         <Title />

         <Stopwatch>
            <StopwatchTime time={calculateValue(60000, 60)}/>
            <StopwatchTime time={calculateValue(1000, 60)} />
            <StopwatchTime time={calculateValue(10, 100)}/>
        </Stopwatch>

        <Buttons>
            <Button buttonType='reset' doOnClick={reset}/>
            <Button buttonType='playOrPause' isRunning={isRunning} doOnClick={playAndStop} />
        </Buttons>
    </Container>
  )
}

export default Index
