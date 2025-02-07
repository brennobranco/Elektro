import styled from "styled-components";

export const ProductContainer = styled.div`
    width: 155px;
    padding: 7.5px 9.5px;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 9.5px;

    border-radius: 15px;

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.08);

    img {
        max-width: 136px;
    }
`

export const InfoContainer = styled.div`
    width: fit-content;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;

    img {
        width: 22.7px;
        height: 22.7px;
    }
`

export const PriceContainer = styled.div`
    width: fit-content;
    max-width: 100px;

    display: flex;
    flex-direction: column;
    gap: 4px;

    p {
        text-align: start;
        font-size: 13px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        color: #2B2B2B;
    }

    h3 {
        text-align: center;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        color: #2B2B2B;
    }
`

//<i class="bi bi-heart"></i>
