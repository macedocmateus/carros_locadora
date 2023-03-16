import {Carro} from "./carro.mjs"

var carro = new Carro(55)

console.log("A capacidade do tanque do seu carro é de: " + carro.capacidade + "L")
console.log("Atualmente o tanque está com: "+ carro.tanque + "L")

carro.tanque = 10
console.log("Foi preenchido com: " + carro.tanque + "L")

carro.tanque = 10
console.log("Foi preenchido com mais 10L : " + carro.tanque + "L")

carro.tanque = 10
console.log("Foi preenchido com mais 10L : " + carro.tanque + "L")

carro.tanque = 10
console.log("Foi preenchido com mais 10L : " + carro.tanque + "L")

carro.tanque = 10
console.log("Foi preenchido com mais 10L : " + carro.tanque + "L")

// Foi colocado mais 10 litros mas como a capacidade era de 55 nao pode ser adicionada, portanto foi adicionado 5 litros para completar a capacidade do tank
carro.tanque = 10
console.log("Foi preenchido com mais 10L : " + carro.tanque + "L")