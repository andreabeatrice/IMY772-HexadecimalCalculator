/**
 * @jest-environment jsdom
 */
import index from "../src/index.js";
import { Calculator } from "../src/calculator.js";
import $ from "jquery";

var element;

beforeAll(() => {
  document.documentElement.innerHTML = index.returnDocument;
});

test("use jsdom in this test file", async () => {
  element = document.createElement("div");
  expect(element).not.toBeNull();
});

test("index.createCalculator() to return a Calculator object", async () => {
  const calculator = new Calculator();
  expect(index.createCalculator).toMatchObject(calculator);
});

test("Including Bootstrap", async () => {
  expect($("#bootstrapLink").attr("href")).toBe(
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
  );
  expect($("#bootstrapLink").attr("rel")).toBe("stylesheet");
  expect($("#bootstrapLink").is("link")).toBe(true);
});

test("CSS", async () => {
  expect($("style")).not.toBeNull();
});

test("form", async () => {
  expect($("#calculatorForm")).not.toBeNull();
  expect($("#calculatorForm").is("form")).toBe(true);
  expect($("#calculatorForm").attr("method")).toBe("GET");
  expect($("#calculatorForm").attr("action")).toBe("#");
});
