import { css } from "styled-components";

export const mobileS = (props) => {
  return css`
    @media only screen and (max-width: 320px) {
      ${props}
    }
  `;
};
export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};
export const mobileL = (props) => {
  return css`
    @media only screen and (max-width: 425px) {
      ${props}
    }
  `;
};

export const tab = (props) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};
export const tablet = (props) => {
  return css`
    @media only screen and (max-width: 988px) {
      ${props}
    }
  `;
};
export const laptop = (props) => {
  return css`
    @media only screen and (max-width: 1024px) {
      ${props}
    }
  `;
};
export const laptopL = (props) => {
  return css`
    @media only screen and (max-width: 1440px) {
      ${props}
    }
  `;
};
export const desktop = (props) => {
  return css`
    @media only screen and (max-width: 2560px) {
      ${props}
    }
  `;
};
