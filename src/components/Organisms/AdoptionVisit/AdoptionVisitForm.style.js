import styled from 'styled-components';

export const Wrapper = styled.form`
    width: 30vw;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    font-family: Montserrat, sans-serif;
    font-weight: bold;
    padding: 1.5em;
    border: 0.06em solid #0292C9;
    box-shadow: 0px 0.25em 0.25em #0292C9;
    background-color: white;
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