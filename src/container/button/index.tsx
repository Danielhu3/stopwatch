import React from 'react'
import { Button } from './style'

type Props = {
    text: string;
}
const index = ({text}:Props) => {
  return (
    <Button>{text}</Button>
  )
}

export default index