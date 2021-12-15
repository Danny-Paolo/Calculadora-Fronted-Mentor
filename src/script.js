import { Resultado } from "./resultado.js";
const result = document.querySelector(".result");
const number = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const otros = document.querySelectorAll(".otros");

const res = new Resultado(result);

function changeThema() {
  const $html = document.documentElement;
  let value = this.value;

  if (value == 1) {
    $html.setAttribute("theme", "theme1");
  } else if (value == 2) {
    $html.setAttribute("theme", "theme2");
  } else {
    $html.setAttribute("theme", "theme3");
  }
}

const theme = document
  .getElementById("theme")
  .addEventListener("click", changeThema);

number.forEach((el) => {
  el.addEventListener("click", () => {
    res.colocar(el);
  });
});

operation.forEach((el) => {
  el.addEventListener("click", () => {
    res.calculo(el);
  });
});

otros.forEach((el) => {
  el.addEventListener("click", () => {
    res.otros(el);
  });
});
