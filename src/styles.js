import styled from 'styled-components';

export const Container = styled.div `
    
    background-color: #f6f6f6;
   color: #4b556;
    display:flex;
    flex-direction: column;
    align-items: center;
`

export const Header = styled.div `
    color: #f6f6f6;
    margin: 5px 0 30px 0;
    width: 97%;
    height: 115px;
    background-color: #00008b;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-radius: 5px;
}
`

export const Main = styled.div `
    border-radius: 10px;
    width: 1000px;
    height: auto;
    background-color: #00008b;
    color: #f6f6f6;

    box-shadow: inset 0 0 0 5px #000000;
    padding: 30px;

    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const Paragrafo  = styled.div `
    margin: 8px 10px 25px 10px;
    color #000000;
`
export const Footer = styled.div `
    width: 100%;
    height: 20vh;
    background-color:rgb(1, 1, 68);
    color: #f6f6f6;
    display:flex;
    justify-content: space-around;
    align-items:center;
`
