function calcularDolar(){

const valorReais = document.getElementById("reais").value;
const valorDolar = valorReais / 4.98;

alert(`O valor em dólares é: ${valorDolar.toFixed(2)}`);

}