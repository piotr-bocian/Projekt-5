import styled from 'styled-components';

export const PageWrapper = styled.div`
    display: grid;
    grid-template-rows: 0.1fr 0.9fr;
    grid-gap: 0em;
    font-family: Montserrat, sans-serif;
    @media only screen and (min-width : 1824px) {
        grid-gap: 1.5em;
        grid-template-rows: 0.2fr 0.8fr;
    }
`;

export const NavWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.1fr 0.9fr;
    grid-gap: 1.5em;
    & h2 {
        margin: 1em 0em;
        font-weight: 100;
        font-size: 1.2em;
        letter-spacing: 0.07em;
    }
    & button {
        display: flex;
        margin: auto;
        margin-top: 1em;
        padding: 0.4em 0.6em;
        font-size: 0.8em;
    }
    @media only screen and (min-width : 1824px) {
        grid-template-columns: 0.1fr 0.9fr;
        grid-gap: 1.5em;
        & h2 {
            margin: 1em 0em;
            font-weight: 100;
            font-size: 1.75em;
        }
        & button {
            margin-top: 1.5em;
            padding: 0.6em;
            font-size: 0.9em;
        }
    }
`;

export const BodyWrapper = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
`;