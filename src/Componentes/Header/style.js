import styled from "styled-components";

export const Conatiner = styled.div`
    width:100%;
    height: 20vh;
    background-color: rgba(137,12,18,1);

    display:flex;
`

export const Logo = styled.a`
    width:80px;
    height:80px;
    padding:10%;

    img{
        width:80px;
        height:80px;
    }
    
`
export const ConatinerMenu =styled.div`
    padding:10%;
    display:flex;
`
export const Menu = styled.a`
    margin: 10px;
    color: rgba(180,180,180,1);
    text-decoration:none; 
    
`

export const Row = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    flex-direction: row;
    width:100%;
`