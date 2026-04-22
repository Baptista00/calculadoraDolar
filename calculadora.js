async function getDolarRate() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL');
    const data = await response.json();
    return parseFloat(data.USDBRL.bid);
}

async function calcularDolar(){

const valorReais = parseFloat(document.getElementById("reais").value);
const dolarRate = await getDolarRate();
const valorDolar = valorReais / dolarRate;

document.getElementById("Resultado").value = valorDolar.toFixed(2);
}
