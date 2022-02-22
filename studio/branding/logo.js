import React from "react";
import styled, { css } from "styled-components";

const Logo = ({ projectName }) => {
  return (
    <Icon isLogin={projectName}>
      <img src="/static/logo_dark.png" alt="Good Energy Logo" />
    </Icon>
  );
};

const Icon = styled.div`
  display: block;
  width: auto;
  height: 40px;

  max-width: 100%;
  margin: 0 auto;

  color: black;
  ${(props) =>
    props.isLogin &&
    css`
      display: block;
      margin: 0 auto;

      color: black;
    `}
  img {
    display: block;
    margin: 0 auto;
    max-height: 100%;
    width: auto;
    fill: currentColor;
  }
`;

export default Logo;
