import React from 'react'
import { StopwatchTime } from './style'

type Props = {
    time:number;
}
const index = ({time}:Props) => {
  return (
    <StopwatchTime>{time}</StopwatchTime>
  )
}

export default index