let nombre = prompt("Ingresa tu nombre");
let ingresoTotal = 0; 
let gastoTotal = 0; 
let ingreso = parseInt(prompt(`${nombre} agrega un ingreso`));
while(ingreso != 0){
    ingresoTotal += ingreso;
    ingreso = parseInt(prompt("Agrega un ingreso"));
}
let gasto = parseInt(prompt(`${nombre} agrega un gasto`));
while(gasto!=0){
    gastoTotal += gasto;
    gasto = parseInt(prompt("Agrega un gasto"));
}
let balance = ingresoTotal - gastoTotal;
alert(`El balance es de: $${balance}`)