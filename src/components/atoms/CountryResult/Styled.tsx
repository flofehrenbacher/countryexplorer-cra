// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import styled from "@emotion/styled";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const CountryResult = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px;
  background-color: whitesmoke;
`;

export const CountryName = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  font-variant: small-caps;
  letter-spacing: 2px;
`;

const flagStyle = css`
  display: block;
  margin: 0 auto;
`;

interface CountryFlagProps {
  flagSrc: string;
}

export const CountryFlag = ({ flagSrc }: CountryFlagProps) => (
  <figure>
    <svg
      css={flagStyle}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="100%"
      height="100%"
    >
      <image xlinkHref={flagSrc} width="100%" height="100%" />
    </svg>
  </figure>
);
