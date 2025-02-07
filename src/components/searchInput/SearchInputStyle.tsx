import styled from "styled-components";

export const Container = styled.div`
    width: 257px;
    padding: 0px 10px 15px 10px;

    border-radius: 16px;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);
    background: #2B2B2B;
    border-bottom: 1px solid #1B1B1B;
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4px;

    border-bottom: 1.5px solid #B9B9B9;

    img {
        width: 24px;
        height: 24px;   
    }

    input {
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: #B9B9B9;

        border: none;
        background: none;
        letter-spacing: 1px;

        outline: none;

        &::placeholder {
            color: #B9B9B9;
        }
    }
    
`