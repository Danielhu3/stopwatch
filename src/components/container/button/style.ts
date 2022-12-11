import styled from "styled-components";
import play from '../../../images/play.svg'
import pause from '../../../images/pause.svg'
import reset from '../../../images/reset.svg'
export const Button = styled.button.attrs((props: {buttonType:string, isRunning?:boolean}) => props)`
    background-color: #202020;
    border: none;
    box-shadow: -1px -3px 4px rgba(84, 84, 84, 0.26), 4px 3px 8px rgba(0, 0, 0, 0.44), inset -4px -4px 5px rgba(0, 0, 0, 0.33), inset 1.4px 0.5px 2px rgba(255, 255, 255, 0.25);
    border-radius: 2.4rem;
    padding: 1.8rem;
    cursor: pointer;
    
    background-image: ${props => props.buttonType === 'reset' ? `url(${reset})` :
     props.isRunning ? `url(${pause})` : `url(${play})`
     };

     background-position: center;
     background-repeat: no-repeat;
     background-size: contain;

     ${props => props.buttonType === 'playOrPause' && !props.isRunning && `
       background-position-x: 100%;
     `};
    

`