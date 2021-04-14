import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 30vw;
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    padding: 1.5em;
    border: 0.06em solid #0292C9;
    box-shadow: 0px 0.25em 0.25em #0292C9;
    background-color: white;
    @media only screen and (min-width : 1824px) {
        width: 20vw;
    }

    @media(max-width: 768px){
        width: 90vw;
    }
`;
export const PostWrapper = styled.div`
    width: 40vw;
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    padding: 1.5em;
    border: 0.06em solid #0292C9;
    box-shadow: 0px 0.25em 0.25em #0292C9;
    background-color: white;
    @media only screen and (min-width : 1824px) {
        width: 40vw;
    }

    @media(max-width: 768px){
        width: 90vw;
    }
`;

export const FormWrapper = styled.form`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
`;

export const centerText = {
    fontSize: '1.25em',
    fontWeight: '300',
    textAlign: 'center',
    margin: '0'
};

export const avatarStyle = {
    margin: 'auto',
    color: '#fff',
    backgroundColor: '#0292C9'
}

export const closeIconStyle = {
    marginLeft: 'auto',
    display: 'flex',
}


export const confirmationHeader = {
    fontSize: '1.25em',
    fontWeight: '300',
    textAlign: 'center',
    margin: '0',
    lineHeight: '1.25em'
};

export const ConfirmationWrapper = styled.div`
    display: grid;
    grid-template-columns: 0.5fr 3fr;
    font-family: Montserrat, sans-serif;
    justify-self: center;
    align-items: center;
    letter-spacing: 0.05em;
    font-weight: 100;
    margin-bottom: 1em;
    & > p {
        padding: 1em; 
    }
    & p > span {
        color: #0292C9; 
    }
`;