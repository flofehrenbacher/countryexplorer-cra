import React from "react";
import * as Styled from "./Styled";

interface CountryResultProps {
  flagSrc: string;
  countryName: string;
}

export const CountryResult = (props: CountryResultProps) => (
  <Styled.CountryResult css={{ marginTop: 20 }}>
    <Styled.CountryName>{props.countryName}</Styled.CountryName>
    <Styled.CountryFlag flagSrc={props.flagSrc} />
  </Styled.CountryResult>
);
