import styled from 'styled-components';

export const PageWrapper = styled.div`
    width: 100vw;
    height: 100%;
    display: grid;
    grid-template-rows: 0.2fr 0.6fr 0.2fr;
    font-family: Montserrat, sans-serif;
    & h2 {
        font-weight: 100;
        font-size: 1.25em;
        letter-spacing: 0.07em;
        justify-self: center;
        align-self: center;
        padding: 1em 0;
        margin-top: 1em;
        margin-bottom: 1em;
    }
    & button {
        font-size: 0.8em;
        margin-top: 1em;
    }
    @media only screen and (min-width : 1824px) {
        width: 100%;
        & h2 {
            font-size: 1.75em;
            padding: 0;
        }
        & button {
            font-size: 1.25em;
            margin-top: 0;
        }
    }
`;

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`;

export const Step = styled.div`
    display: grid;
    grid-template-rows: 0.4fr 0.1fr 0.5fr;
    & svg {
        font-size: 6em;
    }
    & h4 {
        font-weight: 100;
        font-size: 1em;
        letter-spacing: 0.07em;
        justify-self: center;
        align-self: center;
    }
    & p {
        padding: 0.8em 2em;
        font-size: 0.85em;
        line-height: 1.6;
        text-align: center;
    }
    & p > span {
        color: #0292C9;
    }
    @media only screen and (min-width : 1824px) {
        & svg {
            font-size: 10em;
        }
        & h4 {
            font-size: 1.5em;
        }
        & p {
            padding: 1em 3em;
            font-size: 1em;
        }
    }
`;


export const ButtonWrapper = styled.div`
    justify-self: center;
    align-self: center;
`;

export const iconStyle = {
    margin: 'auto',
    color: '#0292C9',
};