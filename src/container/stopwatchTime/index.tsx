import React from 'react'
import { StopwatchTime } from './style'

type Props = {
    time: string;
}
const index = ({time}:Props) => {
  return (
    <StopwatchTime>{time ? time : '00'}</StopwatchTime>
  )
}

export default index