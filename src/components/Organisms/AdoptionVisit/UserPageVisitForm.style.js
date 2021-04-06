import styled from 'styled-components';

export const PageWrapper = styled.div`
    display: grid;
    grid-template-rows: 0.2fr 0.8fr;
    grid-gap: 1.5em;
    font-family: Montserrat, sans-serif;
`;

export const NavWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.1fr 0.9fr;
    grid-gap: 1.5em;
    & h2 {
        margin: 1em 0em;
        font-weight: 100;
        font-size: 1.75em;
        letter-spacing: 0.07em;
    }
    & button {
        display: flex;
        margin: auto;
        margin-top: 1.5em;
        padding: 0.6em;
    }
`;

export const BodyWrapper = styled.div`
    display: grid;
    justify-items: center;
    align-items: center;
`;