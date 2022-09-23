//VARIABLES GLOBALES
let ingresoTotal = 0; 
/* let gastoTotal = 0; */
const ingresoLista = [];
const gastoLista = [];
//FUNCIONES
const suma = (total, item) => total + item;
const resta = (totIngreso, totGasto) => totIngreso - totGasto;

//DESARROLLO
let nombre = prompt("Ingresa tu nombre");
let ingreso = parseInt(prompt(`${nombre} agrega un ingreso`));
while(ingreso != 0){
    ingresoLista.push(ingreso);
    ingreso = parseInt(prompt("Agrega un ingreso"));
}
let gasto = parseInt(prompt(`${nombre} agrega un gasto`));
while(gasto!=0){
    gastoLista.push(gasto);
    gasto = parseInt(prompt("Agrega un gasto"));
}
let gastoMax = gastoLista.reduce((a, b) => Math.max(a, b), 0); //Uso de Math y de reduce
alert(`El gasto mas grande es de: $${gastoMax}`);
for (let i = 0; i < ingresoLista.length; i++) {
    const ingresoItem = ingresoLista[i];
    ingresoTotal = suma(ingresoTotal, ingresoItem);
}
/* for (let x = 0; x < gastoLista.length; x++) {
    const gastoItem = gastoLista[x];
    gastoTotal = suma(gastoTotal, gastoItem);
} */
const gastoTotal = gastoLista.reduce((acumulador, item) => acumulador + item, 0); //simplificacion del for de arriba

let balance = resta(ingresoTotal, gastoTotal);
alert(`El balance es de: $${balance}`)

