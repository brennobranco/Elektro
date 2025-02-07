import styled from "styled-components";
import { Link } from "react-router-dom";


export const MenuStyle = styled.div<{ $isOpen: boolean }>`
    min-width: 220px;
    height: 100%;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;

    z-index: 100;

    background: #F5F5F5;

    display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
`

export const MenuHeader = styled.header`
    width: 100%;

    display: flex;
    align-items: center;
    gap: 28px;

    padding: 26px 18px;

    background: #2B2B2B;

    img {
        width: 32px;
        height: 32px;
    }

    h1 {
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        color: #FFF;
    }
`
export const LinkGroup = styled.nav`
    width: 100%;
    padding: 0px 20px;

    display: flex;
    flex-direction: column;
`

export const StyledLink = styled(Link)`
    width: 100%;
    padding: 20px 0px;
    
    border-top: 1.5px solid #B9B9B9;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #2B2B2B;

    text-decoration: none;
`

export const ButtonClose = styled.button`
    background: none;
    border: none;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: #000;

    position: absolute;
    bottom: 3%;
    left: 4%;
`