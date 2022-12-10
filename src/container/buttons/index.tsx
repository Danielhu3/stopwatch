import React from 'react'
import { Buttons } from './style'

type Props = {
    children: JSX.Element[]
}
const index = ({children}:Props) => {
  return (
    <Buttons>{children}</Buttons>
  )
}

export default index