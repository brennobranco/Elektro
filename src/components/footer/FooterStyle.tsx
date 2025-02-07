import styled from "styled-components";

export const FooterContainer = styled.footer`
    width: 100%;
    padding: 45px 20px 80px 20px;

    margin-top: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 13px;

    background-color: #FFAE50;

    h2 {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        color: #2B2B2B;
    }
`

export const LinksContainer = styled.nav`
    max-width: 160px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;

    img {
        width: 24px;
        height: 24px;
    }
`