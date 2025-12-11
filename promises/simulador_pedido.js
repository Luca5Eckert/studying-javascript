
const realizarPagamento =  (preco, pago) => {
    return new Promise( (resolver, reject) => {
        const resultado = preco == pago;

        setTimeout( () => {
            if(!resultado){
                reject("Valor pago diferente do pedido");
            }
            resolver("Pagamento concluído");
        }, 2000);
    });
    
}


const fazerPedido = (pedido, pago) => {
    realizarPagamento(pedido.preco, pago)
        .then(resultado => {
            console.log(resultado);
        }).catch(error => {
            console.error(error);
        });
}

function Pedido(nome, preco){
    this.nome = nome;
    this.preco = preco;
} 


const pedido = new Pedido("Carrinho de mão", 2000);

fazerPedido(pedido, 200);
fazerPedido(pedido, 2000);

