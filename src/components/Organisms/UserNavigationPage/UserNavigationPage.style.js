import styled from 'styled-components';

export const PageWrapper = styled.div`
    width: 90%;
    height: 100%;
    display: grid;
    grid-template-rows: 0.2fr 0.8fr;
    font-family: Montserrat, sans-serif;
    & h2 {
        margin: 1em 2em;
        font-weight: 100;
        font-size: 1.75em;
        letter-spacing: 0.07em;
    }
`;

export const NavigationWrapper = styled.div`
    width: 90%;
    height: 100%;
    display: grid;
    grid-template-columns: 0.4fr 0.6fr;
    font-family: Montserrat, sans-serif;
    justify-self: center;
    align-self: center;
`;

export const OptionsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1.5em;
    justify-self: center;
    align-self: center;
    & a > div > button {
        width: 35vh;
        height: 15vh;
        margin-right: 0 !imporntant;
        border: 1px solid #0292c9;
        box-shadow: 0px 0.25em 0.25em #0292C9;
        justify-items: center;
        align-items: center;
    }
`;

export const UserCardWrapper = styled.div`
    display: grid;
    grid-template-rows: 0.4fr 0.4fr 0.2fr;
    font-family: Montserrat, sans-serif;
    border: 0.06em solid #0292C9;
    box-shadow: 0px 0.25em 0.25em #0292C9;
    margin: 0 8em;
    & img {
        justify-self: center;
        align-self: center;
        margin: 1.5em;
    }
    & div {
        margin: 1em 3em;
    }
    & div > h2 {
        font-size: 1.25em;
        margin: 0 0 0.7em 0;
        font-weight: bold;
    }
    & div > p {
        line-height: 1.6;
    }
    & div > button {
        display: flex;
        margin: auto;
        margin-bottom: 1em;
    }
`;

export const ButtonStyle = styled.div`
    & button {
        background-color: #0292c9;
        color: #fff;
        &:hover {
            background-color: rgba(2, 146, 201, 0.69);
            color: #fff;
        }
    }
`;