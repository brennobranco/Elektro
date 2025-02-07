import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 22px;
`
export const InputAndFilterContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 18px;
`

export const FilterContainer = styled.div`
    padding: 0px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    img {
        width: 24px;
        height: 24px;
    }

    p {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: #2B2B2B;
    }
`