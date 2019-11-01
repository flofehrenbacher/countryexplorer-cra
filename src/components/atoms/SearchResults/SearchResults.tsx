import React from "react";

import { CountryResult } from "../CountryResult/CountryResult";
import { Country } from "../../model/Country";

interface SearchResultsProps {
  foundCountries: Country[];
  query: string;
}

export function SearchResults({ foundCountries, query }: SearchResultsProps) {
  const numberOfResults = foundCountries.length;
  return (
    <>
      {numberOfResults ? (
        <p>
          {numberOfResults > 1 &&
            `Found ${numberOfResults} countries matching ${query}`}
        </p>
      ) : (
        <p>Couldn't find any countries</p>
      )}
      {foundCountries.length ? (
        foundCountries.map(c => (
          <CountryResult
            flagSrc={c.flag}
            countryName={c.name}
            key={c.name}
            css={{ marginTop: 10 }}
          />
        ))
      ) : (
        <></>
      )}
    </>
  );
}
