import * as React from "react";
import { create } from "react-test-renderer";
import { TextInput } from "..";

it("renders correctly", () => {
  const dom = create(<TextInput value="hello" />).toJSON();
  expect(dom).toMatchSnapshot();
});