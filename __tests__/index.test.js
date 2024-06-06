/**
 * @jest-environment jsdom
 */
import { component, createCalculator } from "../src/index.js";
import { Calculator } from "../src/calculator.js";
let index = component;
let indexCalculator = createCalculator;

test("use jsdom in this test file", async () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

test("expect index.js to return HTML: <div>Hello webpack</div>", async () => {
  const element = document.createElement("div");
  element.innerHTML = "Hello webpack";

  expect(index).toStrictEqual(element);
});

test("expect index.js to return HTML: <div>Hello webpack</div>", async () => {
  const calculator = new Calculator();

  expect(indexCalculator).toMatchObject(calculator);
});
