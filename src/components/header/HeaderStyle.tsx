import styled from 'styled-components'

export const HeaderStyled = styled.header`
    width: 100%;
    height: auto;
    padding: 18px 30px;
    
    z-index: 10;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    position: Fixed;
    top: 0;
`

export const HeaderImgStyle = styled.div`
    width: 24px;
    height: 24px;

    img {
        width: 100%;
    }
`

export const SearchButton = styled.button`
    width: 100%;
    padding: 8px 16px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;

    border-radius: 16px;
    background: #F5F5F5;

    border: none;

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 1px;

    color: #2B2B2B;
    
    img {
        width: 24px;
        height: 24px; 
    }
`