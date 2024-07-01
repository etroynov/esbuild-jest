/**
 * @jest-environment jsdom
 */

import { afterEach, beforeEach, expect, it } from "@jest/globals"
import * as React from "react"
import { createRoot } from "react-dom/client"
import { act } from "react-dom/test-utils"

import App from '../examples/react-js/App'

/*
* Should loader in jest.config.js
* this will tell the esbuild that .js file has jsx syntax
* transform: {
*  "\\.[jt]sx?$":  [ 'esbuild-jest', { 
*      loaders: {
*        '.js': 'jsx'
*      }
*    }
*  ]
* }
*/

let element

beforeEach(() => {
  element = document.createElement("div");
  document.body.appendChild(element);
})

afterEach(() => {
  element.remove();
});

it("should render [react-js]", async () => {
  const root = createRoot(element)
  await act(async () => {
    root.render(<App />);
  })
  expect(element.innerHTML).toMatchInlineSnapshot(`"<div>hello world!</div>"`)
})
