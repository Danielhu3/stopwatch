import React from 'react'
import { Button } from './style'

type Props = {
    buttonType: string;
    isRunning?: boolean;
    doOnClick?: () => void;

}
const index = ({buttonType, isRunning, doOnClick}:Props) => {
  return (
    <Button buttonType={buttonType} isRunning={isRunning && isRunning} onClick={doOnClick} aria-label={buttonType}></Button>
  )
}

export default index