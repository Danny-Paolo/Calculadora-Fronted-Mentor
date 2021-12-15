import { operations } from "./operation.js";

export class Resultado {
  constructor(result) {
    this.result = result;
    this.valorAnterior = "";
    this.valorActual = "";
    this.pass = true;
    this.signo = "";
  }

  otros(value) {
    if (value.id === "del") {
      this.remove();
    }
    if (value.id === "reset") {
      this.removeAll();
    }

    if (value.id === "equal") {
      this.equal();
    }
  }

  remove() {
    this.result.value = this.result.value.slice(
      0,
      this.result.value.length - 1
    );
    this.pass = true;
  }

  colocar(val) {
    if (this.pass) {
      this.result.value += this.optionPunto(val);
      this.valorAnterior = this.result.value;
    }

    if (!this.pass) {
      if (this.result.value == this.signo) this.removeAll();
      this.result.value += this.optionPunto(val);
      this.valorActual = this.result.value;
    }
  }

  optionPunto(val) {
    if (val.textContent !== ".") return val.textContent;
    if (val.textContent === "." && !this.result.value.includes("."))
      return val.textContent;
    else return "";
  }

  calculo(value) {
    let op = value.id;
    if (this.result.value && this.pass) {
      this.removeAll();
      this.result.value += value.textContent;
      this.signo = op;
      this.pass = false;
    }
  }

  removeAll() {
    this.result.value = "";
  }

  equal() {
    this.valorAnterior = operations[this.signo](
      parseFloat(this.valorAnterior),
      parseFloat(this.valorActual)
    );
    this.result.value = this.valorAnterior;
    this.pass = true;
  }
}
