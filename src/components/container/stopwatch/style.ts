import styled from "styled-components";

export const Stopwatch = styled.div`
    font-size: 2.8rem;
    font-weight: 400;
    line-height: 3.2rem;
    padding: 6.2rem 3.2rem;
    padding: 7.75rem 4rem;
    box-shadow: 6px 6px 36px rgba(0, 0, 0, 0.51), -5px -5px 16px rgba(255, 255, 255, 0.33), 3px 3px 15px #000000, inset 0px 0px 4px rgba(0, 0, 0, 0.6);
    border-radius: 50%;

    // gradient on border
    border: double 1.6rem transparent;
    background-image: linear-gradient(#202020, #202020), 
    linear-gradient(227.26deg, #FF5C00 25.99%, #FE7A00 59.31%, #F5BF00 85.56%, rgba(255, 153, 0, 0) 105.76%);
    background-origin: border-box;
    background-clip: padding-box, border-box;


    & span:first-of-type::after{
        content: ' : ';
    }

    & span:nth-of-type(2)::after{
        content: ' . '
    }

    & span:nth-of-type(3){
        font-size: 1.4rem;
    }
`