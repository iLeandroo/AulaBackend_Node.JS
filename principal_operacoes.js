import {somar} from "./soma.js";

import {subtrair} from "./subtracao.js"

import {dividir} from "./divisao.js"

import {multiplicar} from "./multiplicacao.js"


import promptSync from 'prompt-sync'; // Importação de prompt-sync (Permite a Interação com o Usuário)!!!
const prompt = promptSync();

let operacao = prompt(' Digite a Operação a Ser Realizada: ')               // em Java Script é utilizado prompt() para abrir a mensagem na tela

let n1 = parseInt(prompt('Digite o Primeiro Número: '))
let n2 = parseInt(prompt('Digite o Segundo Número: '))



if (operacao === '+'){
console.log(somar(n1,n2))


} else if (operacao === '-'){
    console.log(subtrair(n1,n2))
}

else if (operacao ==='/'){
console.log(dividir(n1,n2))
}

else if(operacao === '*'){
console.log(multiplicar(n1,n2))
}

else {
    console.log('Operação Invalida!') 
}
