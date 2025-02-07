import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledDiv = styled.div`
    width: fit-content;

    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;

    cursor: pointer;

    img {
        width: 24px;
        height: 24px;
    }

    p {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        color: #DEDEDE;
    }
`
export const StyledLink = styled(Link)`
    text-decoration: none;
`