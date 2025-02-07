import styled from "styled-components";

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;

    h1 {
        color: #000;

        text-align: center;
        font-family: "Russo One";
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    img {
        max-width: 280px;
    }

    p {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: #2B2B2B;
        text-align: center;

        width: 80%
    }
`