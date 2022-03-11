import styled, { css, DefaultTheme } from "styled-components";

interface Props {
  variant: "red" | "yellow" | "blue";
}

const modifiers = {
  red: () => css`
    background-color: #bb0000;
  `,
  yellow: () => css`
    background-color: #bb8700;
  `,
  blue: () => css`
    background-color: #008f8f;
  `,
};

export const StatsContainer = styled.div<Props>`
  ${({ variant }) => css`
    width: 82px;
    height: 39px;
    border-radius: 5px;
    text-align: center;
    ${modifiers[variant]}
  `}
`;

export const TextContainer = styled.div`
  padding: 3px 0;
  p {
    font-size: 9px;
    color: white;
    font-weight: lighter;
  }

  span {
    font-size: 18px;
    color: white;
    font-weight: 700;
  }
`;
