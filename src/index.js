import _ from "lodash";
import { Calculator } from "./calculator.js";

function component() {
  const element = document.createElement("div");

  // element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

function createCalculator() {
  const calculator = new Calculator();
  return calculator;
}

document.body.appendChild(component());

module.exports = {
  component: component(),
  createCalculator: createCalculator(),
};
