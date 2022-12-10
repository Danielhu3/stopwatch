import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    padding: 5rem 5rem 8rem 5rem;

    align-items: center;

    // mobile first
    height: 100vh;
    justify-content: space-between;

    @media screen and (min-width:768px){
        height: unset;
        gap: 8rem;
    }
`