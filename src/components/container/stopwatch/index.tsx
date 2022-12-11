import React from 'react'
import { Stopwatch } from './style'

type Props = {
    children:JSX.Element[]
}
const index = ({children}: Props) => {
  return (
    <Stopwatch>{children}</Stopwatch>
  )
}

export default index