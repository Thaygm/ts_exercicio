"use strict";
//função multiplicação
let ladoA = 15;
let ladoB = 130;
let frente = 8;
let profundidade = 100;
const AreaTotal = (ladoA, ladoB) => ladoA * ladoB;
console.log(ladoA * ladoB);
const AreaCasa = (frente, profundidade) => frente * profundidade;
console.log(frente * profundidade);
// Saudação
class Pessoa {
    constructor(Thaisa) {
        this.nome = Thaisa;
    }
    cumprimentar() {
        return `${this.nome} chegou na aula e disse Olá Professor`;
    }
}
console.log(cumprimentar);
