//VARIABLES GLOBALES
let ingresoTotal = 0;
const ingresoLista = [];
const gastoLista = [];
//FUNCIONES
const suma = (total, item) => total + item;
const resta = (totIngreso, totGasto) => totIngreso - totGasto;
/* const addlList = (inputNumber, list, form, arrayAdd) =>{
    let itemAdd = document.getElementById(inputNumber);
    let listAdd = document.getElementById(list);
    let formAdd = document.getElementById(form);
    formAdd.addEventListener(`submit`, function () {
        arrayAdd.push(itemAdd.value);
        listAdd.innerHTML += `<li>${itemAdd.value}</li>`;
        formAdd.reset();
    })
} ; */

//DESARROLLO
/* addlList(inputIngreso, listaIngresos, formIngresos, ingresoLista); */

let itemIng = document.getElementById("inputIngresos");
let listIng = document.getElementById("listaIngresos");
let formIng = document.getElementById("formIngresos");
formIng.addEventListener(`submit`, function () {
        ingresoLista.push(itemIng.value);
        listIng.innerHTML += `<li>${itemIng.value}</li>`;
        formIng.reset();
    })

let itemGas = document.getElementById("inputGastos");
let listGas = document.getElementById("listaGastos");
let formGas = document.getElementById("formGastos");
formGas.addEventListener(`submit`, function () {
        gastoLista.push(itemGas.value);
        listGas.innerHTML += `<li>${itemGas.value}</li>`;
        formGas.reset();
    })

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