async function carregarDados() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts/invalid");
    
    if (!resposta.ok) {
      throw new Error(`Erro HTTP: ${resposta.status}`);
    }

    console.log("2. Resposta recebida com sucesso")

    return resposta.json();
}

// Devolve um promise
// É colocada como assincrona
carregarDados()
    .then((dados) => {
        console.log("3. Deu certo, resultado:" + dados);
    })
    .catch((erro) => {
        console.error("2. Erro capturado:", erro.message); // Imprime a mensagem de erro detalhada
        console.log("3. Falha no Processo. Detalhes acima.")
    });

console.log("1. Teste");
