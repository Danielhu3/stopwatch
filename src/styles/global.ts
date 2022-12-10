import {createGlobalStyle} from 'styled-components'
export default createGlobalStyle`
    *{
        font-family: Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;
    }
    body{
        font-size: 1.6rem;
    }

    .App{
        background-color: #202020;
        min-height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;
        color:white;
    }
`