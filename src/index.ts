import "./styles.css";
let num = document.getElementById("nro") as HTMLInputElement;
const parMensaje = document.getElementById("mensaje") as HTMLParagraphElement;
let numero = num;
num.addEventListener("input", () => {
  numero = Number(num.value);
  parMensaje.innerText = "EL número ingresadoe es " + numero;
});
