//VARIABLES GLOBALES
let ingresoTotal = 0;
const ingresoLista = [];
const gastoLista = [];
//FUNCIONES
const suma = (total, item) => total + item;
const resta = (totIngreso, totGasto) => totIngreso - totGasto;

//DESARROLLO
/* let inputIngreso  = document.getElementById("inputIngreso") */


let itemIngreso = document.getElementById("inputIngreso");
itemIngreso.addEventListener(`submit`, () => {
    ingresoLista.push(itemIngreso.value);
    let itemIngresoLista = document.getElementById("lista__ingresos");
    itemIngresoLista.innerHTML += `<li>${itemIngreso.value}</li>`;
})

/* let gasto = parseInt(prompt(`${nombre} agrega un gasto`)); */
let itemGasto = document.getElementById("lista__gastos")
while(gasto!=0){
    itemGasto.innerHTML += `<li>${gasto}</li>`;
    
    gastoLista.push(gasto);
    /* gasto = parseInt(prompt("Agrega un gasto")); */

    let input1  = document.getElementById("inputIngreso")
    input1.addEventListener(`input`, () => {
        
    })
}
let gastoMax = gastoLista.reduce((a, b) => Math.max(a, b), 0);
/* alert(`El gasto mas grande es de: $${gastoMax}`); */

let itemGastoMax = document.getElementById("lista__gastomax")
itemGastoMax.innerHTML = `${gastoMax}`;

for (let i = 0; i < ingresoLista.length; i++) {
    const ingresoItem = ingresoLista[i];
    ingresoTotal = suma(ingresoTotal, ingresoItem);
}
const gastoTotal = gastoLista.reduce((acumulador, item) => acumulador + item, 0);

let balance = resta(ingresoTotal, gastoTotal);
/* alert(`El balance es de: $${balance}`) */

let itemBalance = document.getElementById("lista__balance")
itemBalance.innerHTML = `El balance es de ${balance}`;