import * as React from "react";
import CountriesAPI from "../../../apis/countriesOfTheWorld";

import { Header } from "../../atoms/Header/Header";
import { Form } from "../../atoms/Form/Form";
import { SearchResults } from "../../atoms/SearchResults/SearchResults";
import { Country } from "../../model/Country";
import { GlobalStyles } from "../../../styles/GlobalStyles";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export const Home = () => {
  const [value, setValue] = React.useState("");
  const [foundCountries, setFoundCountries] = React.useState([] as Country[]);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    updateCountries();
  };

  const updateCountries = () => {
    CountriesAPI.get(value)
      .then((response: any) => {
        const foundCountries = response.data;
        setFoundCountries(foundCountries);
      })
      .catch((error: any) => {
        console.warn(error);
        setFoundCountries([]);
      });
  };

  const handleChange = (event: any) => {
    setValue(event.target.value);
    updateCountries();
  };
  return (
    <div>
      <GlobalStyles />
      <Header>CountryFacts</Header>
      <div css={formWrapperStyles}>
        <Form
          label={"What country are you interested in?"}
          value={value}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <div css={{ marginTop: 20 }}>
          <SearchResults foundCountries={foundCountries} query={value} />
        </div>
      </div>
    </div>
  );
};

const formWrapperStyles = css`
  margin: 20px 10% 0;
`;
