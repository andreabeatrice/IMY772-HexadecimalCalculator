/**
 * @jest-environment jsdom
 */
import { index } from "../src/index.js";
let i = index;

test("use jsdom in this test file", async () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

test("expect index.js to return HTML: <div>Hello webpack</div>", async () => {
  const element = document.createElement("div");
  element.innerHTML = "Hello webpack";

  expect(i).toStrictEqual(element);
});
