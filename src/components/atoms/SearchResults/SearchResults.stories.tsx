import * as React from "react";

import { storiesOf } from "@storybook/react";
import { SearchResults } from "./SearchResults";

const foundCountryData = [
  { name: "Afghanistan", flag: "https://restcountries.eu/data/afg.svg" },
  { name: "Zimbabwe", flag: "https://restcountries.eu/data/zwe.svg" }
];

storiesOf("Atoms", module).add("SearchResults", () => (
  <SearchResults foundCountries={foundCountryData} query={"de"} />
));
