import _ from "lodash";
import { Calculator } from "./calculator.js";
const calculator = new Calculator();
import $ from "jquery";
var currentInput = "input1";

function buildHTML() {
  var linebreak = document.createElement("br");
  var element = document.createElement("link");
  element.rel = "stylesheet";
  element.id = "bootstrapLink";
  element.href =
    "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";

  document.head.appendChild(element);

  element = document.createElement("style");
  element.innerHTML = "* {font-family: monospace;}";
  document.head.appendChild(element);

  var form = document.createElement("form");
  form.id = "calculatorForm";
  form.method = "GET";
  form.action = "#";

  var input1 = document.createElement("input");
  input1.id = "input1";
  input1.maxlength = "3";
  input1.name = "hex1";
  input1.placeholder = "VALUE 1";
  input1.required = true;
  input1.value = "";
  form.appendChild(input1);
  form.appendChild(linebreak);

  var input2 = document.createElement("input");
  input2.id = "input2";
  input2.maxlength = "3";
  input2.name = "hex2";
  input2.placeholder = "VALUE 2";
  input2.required = true;
  input2.value = "";
  form.appendChild(input2);
  linebreak = document.createElement("br");
  form.appendChild(linebreak);

  var result = document.createElement("input");
  result.id = "result";
  result.placeholder = "RESULT";
  result.readOnly = true;
  linebreak = document.createElement("br");
  form.appendChild(result);
  form.appendChild(linebreak);

  var radio = document.createElement("input");
  radio.type = "radio";
  radio.id = "nullRadio";
  radio.name = "operation";
  radio.autofocus = true;
  radio.disabled = true;
  radio.style.display = "none";

  form.appendChild(radio);

  var div = document.createElement("div");
  div.id = "containerized";

  div.appendChild(rowOne());
  div.appendChild(rowTwo());
  div.appendChild(rowThree());
  div.appendChild(rowFour());
  div.appendChild(rowFive());
  div.appendChild(rowSix());

  form.appendChild(div);
  document.body.appendChild(form);
}

function addCSS() {
  $("#calculatorForm").addClass("m-3");
  $("#input2").addClass("mt-2");
  $("#result").addClass("mt-2");
  $("#containerized").addClass("container mt-2 w-50 float-left");
  $("#row1").addClass("row mb-1");
  $("#col1-1").addClass("col");
  $("#addLabel").addClass("radio-inline mr-");
  $("#col1-2").addClass("col");
  $("#subLabel").addClass("radio-inline mr-");
  $("#col1-3").addClass("col");
  $("#mulLabel").addClass("radio-inline mr-");
  $("#col1-4").addClass("col");
  $("#divLabel").addClass("radio-inline mr-");

  $("#row2").addClass("row mb-1");
  $("#col2-1").addClass("col");
  $("#one").addClass("btn btn-light w-100");
  $("#col2-2").addClass("col");
  $("#two").addClass("btn btn-light w-100");
  $("#col2-3").addClass("col");
  $("#three").addClass("btn btn-light w-100");
  $("#col2-4").addClass("col");
  $("#four").addClass("btn btn-light w-100");

  $("#row3").addClass("row mb-1");
  $("#col3-1").addClass("col");
  $("#five").addClass("btn btn-light w-100");
  $("#col3-2").addClass("col");
  $("#six").addClass("btn btn-light w-100");
  $("#col3-3").addClass("col");
  $("#seven").addClass("btn btn-light w-100");
  $("#col3-4").addClass("col");
  $("#eight").addClass("btn btn-light w-100");

  $("#row4").addClass("row mb-1");
  $("#col4-1").addClass("col");
  $("#nine").addClass("btn btn-light w-100");
  $("#col4-2").addClass("col");
  $("#zero").addClass("btn btn-light w-100");
  $("#col4-3").addClass("col");
  $("#A").addClass("btn btn-light w-100");
  $("#col4-4").addClass("col");
  $("#B").addClass("btn btn-light w-100");

  $("#row5").addClass("row mb-1");
  $("#col5-1").addClass("col");
  $("#C").addClass("btn btn-light w-100");
  $("#col5-2").addClass("col");
  $("#D").addClass("btn btn-light w-100");
  $("#col5-3").addClass("col");
  $("#E").addClass("btn btn-light w-100");
  $("#col5-4").addClass("col");
  $("#F").addClass("btn btn-light w-100");

  $("#row6").addClass("row mb-1");
  $("#col6-1").addClass("col");
  $("#cls").addClass("btn btn-light w-100");
  $("#col6-2").addClass("col");
  $("#backspace").addClass("btn btn-light w-100");
  $("#col6-3").addClass("col");
  $("#submit").addClass("btn btn-primary w-100");
}

function component() {
  const element = document.createElement("div");
  // element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

function rowOne() {
  var row = document.createElement("div");
  row.id = "row1";

  //CREATE COL ITEM
  var col = document.createElement("div");
  col.id = "col1-1";

  var label = document.createElement("label");
  label.id = "addLabel";

  var radio = document.createElement("input");
  radio.type = "radio";
  radio.id = "radioButtonAddition";
  radio.name = "operation";
  radio.value = "add";

  label.appendChild(radio);
  label.innerHTML = label.innerHTML + " +";

  col.appendChild(label);
  row.appendChild(col);

  //CREATE COL ITEM
  col = document.createElement("div");
  col.id = "col1-2";

  label = document.createElement("label");
  label.id = "subLabel";

  radio = document.createElement("input");
  radio.type = "radio";
  radio.id = "radioButtonSubtraction";
  radio.name = "operation";
  radio.value = "sub";

  label.appendChild(radio);
  label.innerHTML = label.innerHTML + " -";

  col.appendChild(label);
  row.appendChild(col);

  //CREATE COL ITEM
  col = document.createElement("div");
  col.id = "col1-3";

  label = document.createElement("label");
  label.id = "mulLabel";

  radio = document.createElement("input");
  radio.type = "radio";
  radio.id = "radioButtonMultiplication";
  radio.name = "operation";
  radio.value = "mul";

  label.appendChild(radio);
  label.innerHTML = label.innerHTML + " ×";

  col.appendChild(label);
  row.appendChild(col);

  //CREATE COL ITEM
  col = document.createElement("div");
  col.id = "col1-4";

  label = document.createElement("label");
  label.id = "divLabel";

  radio = document.createElement("input");
  radio.type = "radio";
  radio.id = "radioButtonDivision";
  radio.name = "operation";
  radio.value = "div";

  label.appendChild(radio);
  label.innerHTML = label.innerHTML + " ÷";

  col.appendChild(label);
  row.appendChild(col);

  return row;
}

function rowTwo() {
  var row = document.createElement("div");
  row.id = "row2";

  //CREATE COL ITEM
  var col = document.createElement("div");
  col.id = "col2-1";

  var button = document.createElement("button");
  button.id = "one";
  button.innerHTML = "1";
  button.type = "button";
  //button.attr("onClick", inputAdded(id, 1));

  col.appendChild(button);
  row.appendChild(col);

  //CREATE COL ITEM
  var col = document.createElement("div");
  col.id = "col2-2";

  var button = document.createElement("button");
  button.id = "two";
  button.type = "button";
  button.innerHTML = "2";

  col.appendChild(button);
  row.appendChild(col);

  //CREATE COL ITEM
  var col = document.createElement("div");
  col.id = "col2-3";

  var button = document.createElement("button");
  button.id = "three";
  button.type = "button";
  button.innerHTML = "3";

  col.appendChild(button);
  row.appendChild(col);

  //CREATE COL ITEM
  var col = document.createElement("div");
  col.id = "col2-4";

  var button = document.createElement("button");
  button.id = "four";
  button.type = "button";
  button.innerHTML = "4";

  col.appendChild(button);
  row.appendChild(col);

  return row;
}

function rowThree() {
  var row = document.createElement("div");
  row.id = "row3";

  //CREATE COL ITEM
  var col = document.createElement("div");
  col.id = "col3-1";

  var button = document.createElement("button");
  button.id = "five";
  button.type = "button";
  button.innerHTML = "5";

  col.appendChild(button);
  row.appendChild(col);

  //CREATE COL ITEM
  var col = document.createElement("div");
  col.id = "col3-2";

  var button = document.createElement("button");
  button.id = "six";
  button.type = "button";
  button.innerHTML = "6";

  col.appendChild(button);
  row.appendChild(col);

  //CREATE COL ITEM
  var col = document.createElement("div");
  col.id = "col3-3";

  var button = document.createElement("button");
  button.id = "seven";
  button.type = "button";
  button.innerHTML = "7";

  col.appendChild(button);
  row.appendChild(col);

  //CREATE COL ITEM
  var col = document.createElement("div");
  col.id = "col3-4";

  var button = document.createElement("button");
  button.id = "eight";
  button.type = "button";
  button.innerHTML = "8";

  col.appendChild(button);
  row.appendChild(col);

  return row;
}

function rowFour() {
  var row = document.createElement("div");
  row.id = "row4";

  //CREATE COL ITEM
  var col = document.createElement("div");
  col.id = "col4-1";

  var button = document.createElement("button");
  button.id = "nine";
  button.type = "button";
  button.innerHTML = "9";

  col.appendChild(button);
  row.appendChild(col);

  //CREATE COL ITEM
  var col = document.createElement("div");
  col.id = "col4-2";

  var button = document.createElement("button");
  button.id = "zero";
  button.type = "button";
  button.innerHTML = "0";

  col.appendChild(button);
  row.appendChild(col);

  //CREATE COL ITEM
  var col = document.createElement("div");
  col.id = "col4-3";

  var button = document.createElement("button");
  button.id = "A";
  button.type = "button";
  button.innerHTML = "A";

  col.appendChild(button);
  row.appendChild(col);

  //CREATE COL ITEM
  var col = document.createElement("div");
  col.id = "col4-4";

  var button = document.createElement("button");
  button.id = "B";
  button.type = "button";
  button.innerHTML = "B";

  col.appendChild(button);
  row.appendChild(col);

  return row;
}

function rowFive() {
  var row = document.createElement("div");
  row.id = "row5";

  //CREATE COL ITEM
  var col = document.createElement("div");
  col.id = "col5-1";

  var button = document.createElement("button");
  button.id = "C";
  button.type = "button";
  button.innerHTML = "C";

  col.appendChild(button);
  row.appendChild(col);

  //CREATE COL ITEM
  var col = document.createElement("div");
  col.id = "col5-2";

  var button = document.createElement("button");
  button.id = "D";
  button.type = "button";
  button.innerHTML = "D";

  col.appendChild(button);
  row.appendChild(col);

  //CREATE COL ITEM
  var col = document.createElement("div");
  col.id = "col5-3";

  var button = document.createElement("button");
  button.id = "E";
  button.type = "button";
  button.innerHTML = "E";

  col.appendChild(button);
  row.appendChild(col);

  //CREATE COL ITEM
  var col = document.createElement("div");
  col.id = "col5-4";

  var button = document.createElement("button");
  button.id = "F";
  button.type = "button";
  button.innerHTML = "F";

  col.appendChild(button);
  row.appendChild(col);

  return row;
}

function rowSix() {
  var row = document.createElement("div");
  row.id = "row6";

  //CREATE COL ITEM
  var col = document.createElement("div");
  col.id = "col6-1";

  var button = document.createElement("button");
  button.type = "button";
  button.id = "cls";
  button.innerHTML = "cls";

  col.appendChild(button);
  row.appendChild(col);

  //CREATE COL ITEM
  var col = document.createElement("div");
  col.id = "col6-2";

  var button = document.createElement("button");
  button.type = "button";
  button.id = "backspace";
  button.innerHTML = "&#9003;";

  col.appendChild(button);
  row.appendChild(col);

  //CREATE COL ITEM
  var col = document.createElement("div");
  col.id = "col6-3";

  var button = document.createElement("button");
  button.type = "submit";
  button.id = "submit";
  button.innerHTML = "=";

  col.appendChild(button);
  row.appendChild(col);

  return row;
}

function createCalculator() {
  return calculator;
}

function returnDocument() {
  return document.documentElement.innerHTML;
}

document.body.appendChild(component());
buildHTML();
addCSS();

$(document).ready(function () {
  var curr = "#input1";

  $("#one").on("click", () => {
    click(curr, 1);
  });

  $("#two").on("click", () => {
    click(curr, 2);
  });

  $("#three").on("click", () => {
    click(curr, 3);
  });

  $("#four").on("click", () => {
    click(curr, 4);
  });

  $("#five").on("click", () => {
    click(curr, 5);
  });

  $("#six").on("click", () => {
    click(curr, 6);
  });

  $("#seven").on("click", () => {
    click(curr, 7);
  });

  $("#eight").on("click", () => {
    click(curr, 8);
  });

  $("#nine").on("click", () => {
    click(curr, 9);
  });

  $("#zero").on("click", () => {
    click(curr, 0);
  });

  $("#A").on("click", () => {
    click(curr, "A");
  });

  $("#B").on("click", () => {
    click(curr, "B");
  });

  $("#B").on("click", () => {
    click(curr, "B");
  });

  $("#C").on("click", () => {
    click(curr, "C");
  });

  $("#D").on("click", () => {
    click(curr, "D");
  });
  $("#E").on("click", () => {
    click(curr, "E");
  });
  $("#F").on("click", () => {
    click(curr, "F");
  });
});

function click(id, number) {
  if ($(id).value === undefined) {
    $(id).val(number);
  } else {
    $(id).val(`${$(id).value}${number}`);
  }
}

module.exports = {
  component: component(),
  createCalculator: createCalculator(),
  returnDocument: returnDocument(),
};
