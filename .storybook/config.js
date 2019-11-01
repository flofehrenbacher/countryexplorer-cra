import React from "react";
import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { GlobalStyles } from "../src/styles/GlobalStyles";

addDecorator(withInfo);

const req = require.context("../src/components", true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const withGlobal = cb => (
  <React.Fragment>
    <GlobalStyles />
    {cb()}
  </React.Fragment>
);

addDecorator(withGlobal);
configure(loadStories, module);
