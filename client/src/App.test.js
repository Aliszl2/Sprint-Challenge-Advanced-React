import React from "react";
import ReactDOM from "react-dom";
import * as rtl from "@testing-library/react";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders text "Womens World Cup- Player ranking', () => {
  const wrapper = rtl.render(<App />);
  const headerText = wrapper.queryByText(/Womens World Cup- Player ranking/i);
  expect(headerText).toBeTruthy();
  
  expect(headerText).toEqual("Womens World Cup- Player ranking");

});
