function carregarDados() {
    // Segundo a ser chamado
    console.log("2. Iniciando carregamento de dados");
    
    return new Promise((resolve) => {
       // Será chamado só depois mesmo sem ter timeout
       // isso ocorre por causa que quando terminado
       // ele vai estar na Microtask Queue, esperando terminar o processando
       // sincrono

        resolve("4. Dados carregados!");
        

    });

}

//primeiro a ser chamado
console.log("1. Inicio Sistema")

//será colocado na task queue após conclusão das call stack
carregarDados()
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((erro) => {
    console.error(erro);
  });

// Terceiro a ser chamado
console.log("3. Continuando rodando")


// será chamado por ultimo mesmo sem timeout por causa
// que promises tem "vantagem" na fila na frente de timeout
setTimeout(() => {
    console.log("5. Ultimo na final!");
}, 0);


/*
A "vantagem" vem do funcionamento da Task Queue, ela possui duas divisões:
Uma é para promises, sendo chamada de MicroTask Queue,
Outra é chamada de MacroTask Queue, ela é usada para questões com I/O, intervalos usando setTimeout.
*/