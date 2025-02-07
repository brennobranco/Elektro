import styled from "styled-components";
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        width: 100%;
        height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        position: relative;

    }
`

export const MainContainer = styled.main`
    width: 100%;

    padding: 20px 20px;
` 