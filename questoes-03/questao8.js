function pegarClasseEleitoralComIdade(idade){
    if(idade < 16){
        return "Não eleitor";
    }

    if(idade > 17 && idade < 66){
        return "Eleitor Obrigatório";
    }

    return "Eleitor facultativo";

}

console.log(pegarClasseEleitoralComIdade(65));