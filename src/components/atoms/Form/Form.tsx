/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import Input from "muicss/lib/react/input";

import { PrimaryButton } from "../Button/Button";

interface FormProps {
  label: string;
  value: string;
  handleChange?: (event: any) => void;
  handleSubmit?: (event: any) => Promise<any>;
}

const formStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export function Form({ label, value, handleChange, handleSubmit }: FormProps) {
  return (
    <form css={formStyle} onSubmit={handleSubmit}>
      <Input
        type="text"
        value={value}
        onChange={handleChange}
        label={label}
        floatingLabel={true}
        css={{ width: "100%" }}
      />
      <PrimaryButton type="submit" value="Search">
        Search
      </PrimaryButton>
    </form>
  );
}
