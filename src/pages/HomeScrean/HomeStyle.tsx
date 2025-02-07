import styled from 'styled-components'

export const MainContainer = styled.main`
    margin: 100px 32px 0px 32px;
    overflow: hidden;
`

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 3px;

    img {
        width: 42px;
        height: 42px;
    }

    h1 {
        font-family: "Russo One";
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        color: #FF8F0E;
    }
`

export const CarrouselContainer = styled.div`
    width: 100%;
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
`
export const CarrouselImg = styled.div`
    width: 100%;
    height: 191px;
    overflow: hidden;
    border-radius: 16px;
`
export const DotsContainer = styled.div`
    width: 52px;
    display: flex;
    gap: 8px;
    overflow: hidden;
`
export const FirstDot = styled.span`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #2B2B2B;
`

export const Dots = styled.span`
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #DEDEDE;
`