//VARIABLES GLOBALES
let ingresoTotal = 0;
const ingresoLista = [];
const gastoLista = [];
//FUNCIONES
const suma = (total, item) => total + item;
const resta = (totIngreso, totGasto) => totIngreso - totGasto;

//DESARROLLO

let nameIng = document.getElementById("inputIngresosNombre");
let valueIng = document.getElementById("inputIngresosValor");
let listIng = document.getElementById("listaIngresos");
let formIng = document.getElementById("formIngresos");
formIng.addEventListener(`submit`, function (e) {
        e.preventDefault();
        ingresoLista.push(valueIng.value);

        const nameIngreso = nameIng.value;
        const valorIngreso = valueIng.value;

        const itemIngreso = { nombre: nameIngreso, valor: valorIngreso}
        const itemJSON = JSON.stringify(itemIngreso);
        console.log(itemJSON);

        sessionStorage.setItem(nameIngreso, itemJSON);
        const objJSON = sessionStorage.getItem(nameIngreso);
        const objetJSON = JSON.parse(objJSON);
        console.log(objJSON);
        console.log(objetJSON);
        console.log(objetJSON.nombre);
        console.log(objetJSON.valor);
        listIng.innerHTML += `<li>Nombre: ${objetJSON.nombre} Valor: ${objetJSON.valor} </li>`;
        formIng.reset();
    })


let itemGas = document.getElementById("inputGastos");
let listGas = document.getElementById("listaGastos");
let formGas = document.getElementById("formGastos");
formGas.addEventListener(`submit`, function (e) {
        e.preventDefault();
        gastoLista.push(itemGas.value);
        listGas.innerHTML += `<li>${itemGas.value}</li>`;
        formGas.reset();
    })

for (let i = 0; i < ingresoLista.length; i++) {
    const ingresoItem = ingresoLista[i];
    ingresoTotal = suma(ingresoTotal, ingresoItem);
}
const gastoTotal = gastoLista.reduce((acumulador, item) => acumulador + item, 0);

let balance = resta(ingresoTotal, gastoTotal);
/* alert(`El balance es de: $${balance}`) */

let itemBalance = document.getElementById("lista__balance")
itemBalance.innerHTML = `El balance es de ${balance}`;