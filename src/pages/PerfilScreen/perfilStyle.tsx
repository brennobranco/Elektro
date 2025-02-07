import styled from "styled-components";

export const HeaderStyle = styled.header`
    width: 100%;
    padding: 16px 33px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img:first-child {
        width: 48px;
        height: 48px;
    }

    img:nth-child(2) {
        width: 24px;
        height: 24px;
    }
`
export const MainStyle = styled.header`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    padding: 8px 31px 55px 31px;

    img {
        width: 178px;
        height: 178px;
    }
`
export const ButtonContainer = styled.div`
    width: 100%;
    
    display: flex;
    justify-content: space-between;
    gap: 16px;
`

export const ToolsGroup = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    gap: 21px;
`