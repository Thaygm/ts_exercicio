//função multiplicação

let ladoA: number = 15;
let ladoB: number = 130;
let frente: number = 8;
let profundidade: number = 100;

const AreaTotal = (ladoA: number, ladoB: number): number => ladoA * ladoB;
console.log(ladoA * ladoB)

const AreaCasa = (frente: number, profundidade: number): number => frente * profundidade;
console.log (frente * profundidade);


// Saudação

class Pessoa {
    nome: string;

    constructor(Thaisa: string) {
        this.nome = Thaisa;
    }

    cumprimentar(): string {
        return `${this.nome} chegou na aula e disse Olá Professor`;
    }
}



