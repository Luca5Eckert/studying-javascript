function calcularPrecoFinal(preco){
    let juros = 0;

    if(preco < 20){
        juros = preco * 0.45;
    } else {
        juros = preco * 0.3;
    }

    return preco + juros;
}

let precoFinal = calcularPrecoFinal(10);
console.log(precoFinal);