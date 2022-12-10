import React from 'react'
import  Button  from './button/'
import  Buttons  from './buttons/'
import  Stopwatch  from './stopwatch/'
import  StopwatchTime  from './stopwatchTime/'
import { Container } from './style'

import  Title  from './title/'

const index = () => {
  return (
    <Container>
         <Title />

         <Stopwatch>
            <StopwatchTime time={0}/>
            <StopwatchTime time={0} />
        </Stopwatch>

        <Buttons>
            <Button text='reset'/>
            <Button text='pause/play'/>
        </Buttons>
    </Container>
  )
}

export default index
