

const realizarDownload =  caminhoArquivo => {
    return new Promise( (resolver, reject) => {
        const resultado = caminhoArquivo.length > 5;

        setTimeout( () => {
            if(!resultado){
                reject("Erro no download");
            }
            resolver("Download concluído");
    }, 2000);
    });
    
}

realizarDownload("Lucas")
    .then(resultado => {
        console.log(resultado);
    }).catch(error => {
        console.error(error);
    });

realizarDownload("./Lucas")
    .then(resultado => {
        console.log(resultado);
    }).catch(error => {
        console.error(error);
    });