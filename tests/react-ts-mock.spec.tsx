/**
 * @jest-environment jsdom
 */

import * as React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils"
import { afterEach, beforeEach, expect, it, jest } from "@jest/globals";

import App from '../examples/react-ts/App'

jest.mock("../examples/react-ts/App", () => {
  return function () {
    return <div>boo world</div>;
  };
});

let element: HTMLElement

beforeEach(() => {
  element = document.createElement("div");
  document.body.appendChild(element);
})

afterEach(() => {
  element.remove()
})

it("should render with jest.mock", async () => {
  const root = createRoot(element)
  await act(async () => {
    root.render(<App />);
  })
  expect(element.innerHTML).toMatchInlineSnapshot(`"<div>boo world</div>"`);
});