//VARIABLES GLOBALES
let ingresoTotal = 0;
const ingresoLista = [];
const gastoLista = [];
//FUNCIONES
const suma = (total, item) => total + item;
const resta = (totIngreso, totGasto) => totIngreso - totGasto;

//DESARROLLO
let nombre = prompt("Ingresa tu nombre");

let nombreLista = document.getElementById("lista__nombre")
nombreLista.innerHTML = `Hola ${nombre}`;

let ingreso = parseInt(prompt(`${nombre} agrega un ingreso`));
while(ingreso != 0){
    let itemIngreso = document.getElementById("lista__ingresos")
    itemIngreso.innerHTML = `<li>${ingreso}</li>`;

    ingresoLista.push(ingreso);
    ingreso = parseInt(prompt("Agrega un ingreso"));
}
let gasto = parseInt(prompt(`${nombre} agrega un gasto`));
while(gasto!=0){
    gastoLista.push(gasto);
    gasto = parseInt(prompt("Agrega un gasto"));

    let itemGasto = document.getElementById("lista__gastos")
    itemGasto.innerHTML = `<li>${gasto}</li>`;
}
let gastoMax = gastoLista.reduce((a, b) => Math.max(a, b), 0);
alert(`El gasto mas grande es de: $${gastoMax}`);

let itemGastoMax = document.getElementById("lista__gastomax")
itemGastoMax.innerHTML = `${gastoMax}`;

for (let i = 0; i < ingresoLista.length; i++) {
    const ingresoItem = ingresoLista[i];
    ingresoTotal = suma(ingresoTotal, ingresoItem);
}
const gastoTotal = gastoLista.reduce((acumulador, item) => acumulador + item, 0);

let balance = resta(ingresoTotal, gastoTotal);
alert(`El balance es de: $${balance}`)

let itemBalance = document.getElementById("lista__balance")
itemBalance.innerHTML = `El balance es de ${balance}`;

