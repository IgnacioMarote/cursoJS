let nombre = prompt("Ingrese su nombre");
alert(`Hola ${nombre} ingresa 10 numeros y te dire cuantos son pares y cuantos impares`)
let numerosPares = 0;
let numerosImpares = 0;
for (let i = 1; i <= 10; i++){
    let numero = parseInt(prompt(`Ingrese el numero ${i}`));
    if (numero % 2 === 0){
        numerosPares++;
    }else{
        numerosImpares++;
    }
};
alert(`Numeros pares: ${numerosPares} y Numeros impares: ${numerosImpares}`)