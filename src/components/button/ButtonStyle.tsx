import styled from "styled-components";

interface ButtonStyleProps {
    size: "small" | "medium";
    $textColor: "white" | "black";
}

export const ButtonStyle = styled.button<ButtonStyleProps>`
    width: ${({ size }) =>
        size === "small" ? "138px" : "188px"
    };

    padding: 11.5px 0px;
    border: none;
    border-radius: 16px;

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;

    color: ${({ $textColor }) =>
        $textColor === "white" ? "#F5F5F5" : "#2B2B2B"
    };

    background: ${({ $textColor }) =>
        $textColor === "white" ? "#2B2B2B" : "#F5F5F5"
    };

    box-shadow: ${({ $textColor }) =>
        $textColor === "black" ? "0px 4px 4px 0px rgba(0, 0, 0, 0.08)" : ""
    };
`