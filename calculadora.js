function calcularDolar(){

const valorReais = document.getElementById("reais").value;
const valorDolar = valorReais / 4.98;

document.getElementById("Resultado").value = valorDolar.toFixed(2);
}