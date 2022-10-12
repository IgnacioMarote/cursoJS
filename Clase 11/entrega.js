//VARIABLES GLOBALES
const ingresoLista = [];
const gastoLista = [];
//FUNCIONES
const resta = (totIngreso, totGasto) => totIngreso - totGasto;

//DESARROLLO

let nameIng = document.getElementById("inputIngresosNombre");
let valueIng = document.getElementById("inputIngresosValor");
let listIng = document.getElementById("listaIngresos");
let formIng = document.getElementById("formIngresos");
formIng.addEventListener(`submit`, function (e) {
        e.preventDefault();
        valueIng.value === "" && (valueIng.value = 0); //Agregando OPERADOR LÓGICO AND para optimizar el código
        ingresoLista.push(valueIng.value);

        const nameIngreso = nameIng.value;
        const valorIngreso = valueIng.value;

        const itemIngreso = {nombre: nameIngreso, valor: valorIngreso}
        const itemIngJSON = JSON.stringify(itemIngreso);

        sessionStorage.setItem(nameIngreso, itemIngJSON);
        const objIngJSON = sessionStorage.getItem(nameIngreso);
        const objetIngJSON = JSON.parse(objIngJSON);
        listIng.innerHTML += `<li>Nombre: ${objetIngJSON.nombre} Valor: ${objetIngJSON.valor} </li>`;
        formIng.reset();
    })

let nameGas = document.getElementById("inputGastosNombre");
let valueGas = document.getElementById("inputGastosValor");
let listGas = document.getElementById("listaGastos");
let formGas = document.getElementById("formGastos");
formGas.addEventListener(`submit`, function (e) {
    e.preventDefault();
    valueGas.value === "" && (valueGas.value = 0);
    gastoLista.push(valueGas.value);

    const nameGastos = nameGas.value;
    const valorGastos = valueGas.value;

    const itemGastos = {nombre: nameGastos, valor: valorGastos}
    const itemGasJSON = JSON.stringify(itemGastos);

    sessionStorage.setItem(nameGastos, itemGasJSON);
    const objGasJSON = sessionStorage.getItem(nameGastos);
    const objetGasJSON = JSON.parse(objGasJSON);
    listGas.innerHTML += `<li>Nombre: ${objetGasJSON.nombre} Valor: ${objetGasJSON.valor} </li>`;
    formGas.reset();
    })

let itemBalance = document.getElementById("listaBalance")
formGas.addEventListener(`submit`, function () {
    itemBalance.innerHTML = ` `;
    const ingresoTotal = ingresoLista.reduce((acumulador, item) => acumulador + parseInt(item), 0);
    const gastoTotal = gastoLista.reduce((acumulador, item) => acumulador + parseInt(item), 0);
    const balance = resta(ingresoTotal, gastoTotal);
    itemBalance.innerHTML += `El balance es de ${balance}`;
})