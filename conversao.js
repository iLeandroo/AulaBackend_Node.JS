export function converter(array){

    let arrayInvertido = [];  // Array para Armazenar ele Invertido
    
    for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push(array[i]);
    }
    
    return arrayInvertido;
    
    }
    
    
    
    