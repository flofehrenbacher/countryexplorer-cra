/** @jsx jsx */
import { css, jsx, Global } from "@emotion/core";
import emotionReset from "emotion-reset";

export const GlobalStyles = () => (
  <Global
    styles={css`
      ${emotionReset}
      html {
        font-family: Helvetica, Arial, sans-serif;
        box-sizing: border-box;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
    `}
  />
);
